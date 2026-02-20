import { favMenuRepository } from "../repository/FavMenuRepository";

export const favMenuSerivice = {
  async getAllMenus() {
    return await favMenuRepository.getFavMenus();
  },
};
