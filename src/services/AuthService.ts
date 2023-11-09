import axios from "axios";
import { AppResponse } from "../models/Response";
import { Util } from "../Util";
import { User, UserData } from "../models/User";

export interface UserLoginData {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export class AuthService {
  private static readonly TOKEN_KEY = "token";

  public static async getMe(): Promise<AppResponse<any>> {
    const ep = Util.apiAuthUrl("get/user");

    const res = await axios.get<
      void,
      AppResponse<any>
    >(ep);

    if (res.error) {
      localStorage.removeItem(AuthService.TOKEN_KEY);
    }

    return res;
  }

  public static async userLogin(
    userLoginData: UserLoginData
  ): Promise<AppResponse<LoginResponse>> {
    const ep = Util.apiPublicUrl("login");

    const res = await axios.post<UserLoginData, AppResponse<LoginResponse>>(
      ep,
      userLoginData
    );

    if (res.success) {
      localStorage.setItem(AuthService.TOKEN_KEY, res.data.token); //TODO read token from cookie and remove this implementation
    }

    return res;
  }

  public static userLogout(): void {
    localStorage.removeItem(AuthService.TOKEN_KEY);
  }

  public static getToken(): string | null {
    return localStorage.getItem(AuthService.TOKEN_KEY);
  }

  public static setToken(token: string): void {
    console.log("hiii", token);
    localStorage.setItem(AuthService.TOKEN_KEY, token);
  }
}
