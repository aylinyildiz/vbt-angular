import { CartService } from './../cart/services/cart-service';
import { ProductService } from './services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from './models/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService],
})
export class ProductComponent implements OnInit {
  products: Array<Product> = new Array<Product>();
  addedProduct: string = '';
  filterText: string = '';

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private activatedRoute: ActivatedRoute
  ) {}

  //ngOnInit --- sayfaya ilk girdiğimizde çağıracağımız işler için yarar
  ngOnInit(): void {
    // this.getProduct();
    this.activatedRoute.params.subscribe((params) => {
      this.getProduct(params['categoryId']);
    });
  }

  getProduct(categoryId: number) {
    this.productService.getProduct(categoryId).subscribe((response) => {
      this.products = response;
    });
  }

  addToCart(product: Product) {
    this.addedProduct = product.ProductName;
    this.cartService.addToCart(product);
  }
}
