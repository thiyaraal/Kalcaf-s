import type { UserDto } from "./UserDto";

export interface LoginResponse {
  user: UserDto;
  token: string;
}
