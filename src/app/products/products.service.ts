import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  plural: any;
  constructor(private http: HttpClient) {}

  getProducts(category: String) {
    category = category.substring(1);
    return this.http.get(`http://127.0.0.1:8000/products/${category}`);
  }
}
