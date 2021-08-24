import { ProductService } from './services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from './models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService],
})
export class ProductComponent implements OnInit {
  products: Array<Product> = new Array<Product>();
  addedProduct: string = '';

  constructor(private productService: ProductService) {}

  //ngOnInit --- sayfaya ilk girdiğimizde çağıracağımız işler için yarar
  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this.productService.getProduct().subscribe((response) => {
      this.products = response;
    });
  }

  addToCart(product: Product) {
    this.addedProduct = product.ProductName;
  }
}
