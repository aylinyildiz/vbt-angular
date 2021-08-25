import { Category } from './../models/category';
import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CategoryService {
  constructor(
    private http: HttpClient,
    @Inject('apiUrl') private apiUrl: string
  ) {}

  getCategories(): Observable<Category[]> {
    return this.http
      .get<any>(this.apiUrl + '/Categories')
      .pipe(map((response) => response.value));
  }
}
