export interface FavMenuItemDTO {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
}

export interface CategoryDTOfIrst {
  id: number;
  name: string;
  items: FavMenuItemDTO[];
}

export interface FavMenuResponseDTO {
  categories: CategoryDTOfIrst[];
}
