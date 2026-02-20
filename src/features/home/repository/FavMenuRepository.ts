import { apiClient2 } from "../../../core/http/ApiClient";
import type { FavMenuResponseDTO } from "../dto/FavMenu.dto";

export const favMenuRepository = {
  async getFavMenus(): Promise<FavMenuResponseDTO> {
    const response = await apiClient2.get("/c/8ded-b5d0-402b-aa94");
    return response.data;
  },
};
