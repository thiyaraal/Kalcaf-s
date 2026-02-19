import { useEffect, useState } from "react";

import { categoryService } from "../services/CategoryService";
import type { CategoryDTO } from "../dto/Category.dto";

export const useCategoryViewModel = () => {
  const [categories, setCategories] = useState<CategoryDTO[]>([]);
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        setLoading(true);

        const response = await categoryService.getAllCategories();

        if (response.success) {
          setCategories(response.result);

          if (response.result.length > 0) {
            setActiveCategoryId(response.result[0].id);
          }
        } else {
          setError(response.msg ?? "Failed to fetch categories");
        }
      } catch (err) {
        setError("Something went wrong");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadCategories();
  }, []);

  const selectCategory = (id: string) => {
    setActiveCategoryId(id);
  };

  const activeCategory = categories.find((cat) => cat.id === activeCategoryId);

  return {
    categories,
    activeCategoryId,
    activeCategory,
    selectCategory,
    loading,
    error,
  };
};
