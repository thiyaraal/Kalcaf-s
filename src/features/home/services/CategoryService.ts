import { categoryRepository } from "../repository/CategoryRepository";

export const categoryService = {
  async getAllCategories() {
    return await categoryRepository.getCategories();
  },
};
