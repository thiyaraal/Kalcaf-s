import type { LoginRequest } from "../dto/LoginRequest";
import type { LoginResponse } from "../dto/LoginResponse";
import { mapLoginResult } from "../mapper/LoginMapper";
import { AuthRepository } from "../repository/AuthRepository";

export class AuthService {
  private repo = new AuthRepository();

  async login(req: LoginRequest): Promise<LoginResponse> {
    const res = await this.repo.login(req);

    if (!res.data.success) {
      throw new Error(res.data.msg ?? "Login failed");
    }

    const loginResult = mapLoginResult(res.data.result);

    localStorage.setItem("token", loginResult.token);
    localStorage.setItem("user", JSON.stringify(loginResult.user));

    return loginResult;
  }
}
