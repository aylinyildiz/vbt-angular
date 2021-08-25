import { Product } from './../product/models/product';
import { CartItem } from './models/cart-item';
import { CartService } from './services/cart-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  isProductRemoved: boolean = false;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.list();
  }

  removeFromCart(product: Product) {
    if (confirm('Emin misiniz?')) {
      this.cartService.removeFromCart(product);
      this.isProductRemoved = true;
    }
  }
}
