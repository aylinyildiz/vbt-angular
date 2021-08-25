import { Product } from './../models/product';
import { HttpClient } from '@angular/common/http';

//service olduğunu anlamak için injectable declere ediyoruz
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(
    private http: HttpClient,
    @Inject('apiUrl') private apiUrl: string
  ) {}

  getProduct(categoryId: number): Observable<Product[]> {
    if (categoryId > 0) {
      return this.http
        .get<any>(this.apiUrl + '/Categories(' + categoryId + ')/Products/')
        .pipe(map((response) => response.value));
    } else {
      return this.http
        .get<any>(this.apiUrl + '/Products')
        .pipe(map((response) => response.value));
    }
  }
}
