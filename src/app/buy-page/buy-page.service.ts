import { ShoppingCartService } from './../shopping-cart/shopping-cart.service';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BuyPageService {
  cartPrices: any;
  constructor(
    private http: HttpClient,
    private shoppinCartService: ShoppingCartService
  ) {}

  sendToServer(form: any) {
    return this.http.post('http://127.0.0.1:8000/buypage/', form);
  }

  getProductsFromcart() {
    return this.shoppinCartService.getAllProductsFromStorage();
  }
}
