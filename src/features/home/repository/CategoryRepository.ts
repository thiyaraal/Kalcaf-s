import { apiClient } from "../../../core/http/ApiClient";
import type { CategoryResponseDTO } from "../dto/Category.dto";

export const categoryRepository = {
  async getCategories(): Promise<CategoryResponseDTO> {
    const response = await apiClient.get("/category/find-all");
    return response.data;
  },
};
