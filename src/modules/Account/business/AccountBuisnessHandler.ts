import { IAccountBusinessHandler } from './IAccountBusinessHandler';
import { Users } from '../models/Users';
import { AccountService } from '../service/AccountService';
export class AccountBuisnessHandler implements IAccountBusinessHandler {

    private accountService = new AccountService();

    async LoginUser(user: Users): Promise<Users[]> {
        let userList = await this.accountService.GetUser();
        userList.forEach((element) => {
            return element["test"] = "test";
        });
        return userList;
    }

    ForgetPassword(username: string, email: string): string {
        return "";
    }

    ForgetUsername(email: string): string {
        return "";
    }

    RegisterUser(user: Users): string {
        this.accountService.PostUser(user);
        return "inserted";
    }

}