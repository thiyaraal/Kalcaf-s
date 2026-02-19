import { useEffect, useState } from "react";
import type { CategoryDTOfIrst } from "../dto/Menu.dto";
import { menuSerivice } from "../services/MenuService";

export const useMenuViewModel = () => {
  const [categories, setCategories] = useState<CategoryDTOfIrst[]>([]);
  const [activeCategoryId, setActiveCategoryId] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMenus = async () => {
      try {
        const data = await menuSerivice.getAllMenus();
        setCategories(data.categories);

        if (data.categories.length > 0) {
          setActiveCategoryId(data.categories[0].id);
        }
      } catch (error) {
        console.error("Error loading menus:", error);
      } finally {
        setLoading(false);
      }
    };
    loadMenus();
  }, []);
  const activeCategory = categories.find((cat) => cat.id === activeCategoryId);
  const menuItems = activeCategory?.items || [];

  return {
    categories,
    activeCategoryId,
    setActiveCategoryId,
    loading,
    activeCategory,
    menuItems,
  };
};
