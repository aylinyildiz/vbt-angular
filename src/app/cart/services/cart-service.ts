import { CART_ITEM_LIST } from './../models/cart-item-list';
import { CartItem } from './../models/cart-item';
import { Product } from './../../product/models/product';
import { Injectable } from '@angular/core';

@Injectable()
export class CartService {
  constructor() {}

  addToCart(product: Product): void {
    var addedItem = CART_ITEM_LIST.find(
      (t) => t.Product.ProductId == product.ProductId
    );
    if (addedItem) {
      addedItem.Quantity += 1;
    } else {
      let cartItem = new CartItem();
      cartItem.Product = product;
      cartItem.Product = product;
      cartItem.Quantity = 1;
      CART_ITEM_LIST.push(cartItem);
    }
  }

  list(): CartItem[] {
    return CART_ITEM_LIST;
  }

  removeFromCart(product: Product): void {
    var addedItem = CART_ITEM_LIST.find(
      (t) => t.Product.ProductId == product.ProductId
    );
    if (addedItem) {
      var indexNo = CART_ITEM_LIST.indexOf(addedItem);
      if (indexNo != -1) {
        CART_ITEM_LIST.splice(indexNo, 1);
      }
    }
  }
}
