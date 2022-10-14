import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailsService {
  constructor(private http: HttpClient) {}
  getProduct(id: string) {
    return this.http.get(`http://127.0.0.1:8000/products/details/${id}`);
  }
}
