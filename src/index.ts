import "reflect-metadata";
import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./Routes";
import { Socket } from "./socket/helper";
import { Track } from "./socket/TrackVehicle";
import { Sequelize } from 'sequelize-typescript';
import { UrlHandler, ModuleHandler } from './helper';
import { Exception } from './middleware';
import * as Modules from "./modules";

require('dotenv').config()
const app = express();
const argv = require("yargs").argv;
const server = require("http").Server(app);
const io = require("socket.io")(server);
const dbConfig = require("./config/dbConfig")[process.env.NODE_ENV];
const appConfig = require("./config/appConfig")[process.env.NODE_ENV];

const router = express.Router();
const routes = new Routes(router, app);
let sequelize: Sequelize;

export class Server {

    constructor() {
        app.use(bodyParser.json());
        app.use(Exception());
        this.routes(UrlHandler);
        this.connectDb();
        this.testDb();
        this.listen();
        this.socket();
    }

    listen() {
        server.listen(process.env.PORT || 3005, () => { });
    }

    connectDb() {
        sequelize = new Sequelize({
            name: dbConfig.database,
            dialect: dbConfig.dialect,
            username: dbConfig.username,
            password: dbConfig.password,
            modelPaths: ModuleHandler(this.addModule())
        });
    }

    testDb() {
        sequelize
            .authenticate()
            .then(err => {
                console.log('Connection has been established successfully.');
            })
            .catch(err => {
                console.error('Unable to connect to the database:', err);
            });
    }

    addModule() {
        return [
            'Account'
        ];
    }

    socket() {
        const connection = new Socket.SocketConnection(io, "main", Track.TrackVehicleCore);
    }

    routes(baseUrl) {
        let self = this; 
        self.addModule().forEach((element) => {
            self.factory(element, baseUrl);
        })
    }

    factory(data: any, baseUrl: any) {
        app.use(baseUrl(data.toLowerCase()), new Modules[data + "Routes"](router).Routes())
    }


}

new Server();