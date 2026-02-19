export interface MenuItemDTO {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
}

export interface CategoryDTOfIrst {
  id: number;
  name: string;
  items: MenuItemDTO[];
}

export interface MenuResponseDTO {
  categories: CategoryDTOfIrst[];
}
