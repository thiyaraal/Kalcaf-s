import { apiClient } from "../../../core/http/ApiClient";
import type { LoginRequest } from "../dto/LoginRequest";

export class AuthRepository {
  login(req: LoginRequest) {
    return apiClient.post("/auth/login", req);
  }
}
