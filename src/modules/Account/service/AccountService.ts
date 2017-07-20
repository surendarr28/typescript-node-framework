import { Request, Response } from "express";
import { Core } from "../../Core";
import { Users } from "../models/Users";

export class AccountService extends Core.BaseService {

    async GetUser(): Promise<Users[]> {
        try {
            let users = await Users.findAll<Users>({raw: true});
            return users;
        } catch (e) {
            console.log("rest", e);
            throw e;
        }
    }

    PostUser(objUser: Users) {
        try {
            const user = new Users(objUser);
            let result = user.save();
            return result;
        } catch (e) {
            console.log(e);
            throw e;
        }
    }
}