import { Response, Request, Router, Express } from "express";


export class Routes {
    private route: Router;
    private app: Router;
    public accountRoutes: Router;


    constructor(route: Router, app: Express) {
        this.route = route;
        this.app = app;
    }

    Routes() {
        let self = this;
        self.route.get("/", function (req, res) {
            res.send("APP NAME");
        });
        return self.route;
    }
}
