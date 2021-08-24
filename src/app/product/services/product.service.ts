import { Product } from './../models/product';
import { HttpClient } from '@angular/common/http';

//service olduğunu anlamak için injectable declere ediyoruz
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient, @Inject('apiUrl') private apiUrl: string) { }

  getProduct(): Observable<Product[]> {
    return this.http.get<any>(this.apiUrl + '/Products').pipe(map(response => response.value));
  }
}
