import { Users } from '../models/Users';

export interface IAccountBusinessHandler {
    LoginUser(user: Users): Promise<Users[]>,
    ForgetPassword(username: string, email: string): string,
    ForgetUsername(email: string): string,
    RegisterUser(user: Users): string,
}