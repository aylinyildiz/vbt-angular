import { CartService } from './../services/cart-service';
import { CartItem } from './../models/cart-item';
import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css'],
})
export class CartSummaryComponent implements OnInit, DoCheck {
  totalCartItem: number = 0;
  totalCartItemPrice: number = 0;
  cartItems: Array<CartItem> = new Array<CartItem>();

  constructor(private cartService: CartService) {}

  //sayfayı ilk açtığımızda çalışır!
  ngOnInit(): void {
    this.cartItems = this.cartService.list();
  }

  //değişkende bir değişiklik olduğunda çalışması için kullanırız
  ngDoCheck(): void {
    this.totalCartItem = this.cartService
      .list()
      .reduce((a, b) => a + b.Quantity, 0);
    this.totalCartItemPrice = this.cartService
      .list()
      .reduce((a, b) => a + b.Quantity * b.Product.UnitPrice, 0);
  }
}
