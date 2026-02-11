import { menuRepository } from "../repository/MenuRepository";

export const menuSerivice = {
  async getAllMenus() {
    return await menuRepository.getMenus();
  },
};
