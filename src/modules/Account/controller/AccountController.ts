import { Request, Response } from "express";
import { Core } from "../../Core";
import { AccountBuisnessHandler } from "../business/AccountBuisnessHandler";

export class AccountController extends Core.BaseController {

    private Users = new AccountBuisnessHandler();

    /**
    * GET /User
    */
    LoginUser() {
        let self = this;
        return async (req: Request, res: Response) => {
            try {
                let result = await self.Users.LoginUser(req.body);
                return res.send(result);
            } catch (e) {
                console.log(e);
                throw e;
            }
        };
    }

    /**
    * GET /User
    */
    RegisterUser() {
        let self = this;
        return async (req: Request, res: Response) => {
            try {
                let result = self.Users.RegisterUser(req.body);
                return res.send(result);
            } catch (e) {
                console.log(e);
                throw e;
            }
        };
    }
}