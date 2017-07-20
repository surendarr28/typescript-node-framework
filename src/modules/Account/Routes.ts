import { Router } from "express";
import { Core } from "../Core";
import Cores = Core;
import { AccountController } from "./controller/AccountController";
import { Middleware } from "./middleware";


export class Routes extends Core.BaseRoutes {
    private route: Router;
    private accountController: AccountController = new AccountController();
    private middleware: Middleware = new Middleware();

    constructor(route: Router) {
        super();
        this.route = route;
    }

    Routes() {
        let self = this;

        self.route.get("/login", [self.middleware.Authorization()], self.accountController.LoginUser());
        self.route.get("/reg", [self.middleware.Authorization()], self.accountController.RegisterUser());

        return self.route;
    }
}
