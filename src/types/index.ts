export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  rating: number;
}

export interface CartItem extends Product {
  quantity: number;
}
