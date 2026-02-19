export interface CategoryDTO {
  items: any;
  id: string;
  categoryCode: string;
  categoryName: string;
  description: string;
  isActive: boolean;
  createdAt: string;
}

export interface CategoryResponseDTO {
  success: boolean;
  msg: string | null;
  result: CategoryDTO[];
  pageRedirect: string | null;
  tokenValid: boolean;
}
