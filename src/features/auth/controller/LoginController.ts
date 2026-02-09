import { AuthService } from "../services/LoginService";

export class AuthController {
  private service = new AuthService();

  login(username: string, password: string) {
    return this.service.login({ username, password });
  }
}
