import type { LoginResponse } from "../dto/LoginResponse";
import type { UserDto } from "../dto/UserDto";

export function mapLoginResult(apiResult: any): LoginResponse {
  const user: UserDto = {
    id: apiResult.id,
    firstName: apiResult.firstName,
    lastName: apiResult.lastName,
    username: apiResult.username,
    email: apiResult.email,
    role: apiResult.role,
  };

  return {
    user,
    token: apiResult.token,
  };
}
