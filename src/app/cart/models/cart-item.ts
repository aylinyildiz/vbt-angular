import { Product } from './../../product/models/product';

export class CartItem {
  Quantity: number;
  Product: Product;

  constructor() {
    this.Quantity = 0;
    this.Product = new Product();
  }
}
