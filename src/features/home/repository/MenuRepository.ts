import { apiClient2 } from "../../../core/http/ApiClient";
import type { MenuResponseDTO } from "../dto/Menu.dto";

export const menuRepository = {
  async getMenus(): Promise<MenuResponseDTO> {
    const response = await apiClient2.get("/c/8ded-b5d0-402b-aa94");
    return response.data;
  },
};
