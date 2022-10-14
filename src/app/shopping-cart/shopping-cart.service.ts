import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  product: any;
  showCart: any;
  routeId = this.route.snapshot.params['id'];
  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  getShowCartStatus(boolean: boolean) {
    this.showCart = boolean;
  }

  sendShowCartStatus() {
    return this.showCart;
  }

  mostrarSeila() {
    return 'ola';
  }

  sendToCart(product: any) {
    let products = this.getAllProductsFromStorage();
    let filteredProducts = products.filter(
      (prod: any) => prod.id == product.id && prod.size == product.size
    );
    if (filteredProducts.length == 0) {
      product.quantity = 1;
      products.push(product);
    } else {
      products.map((prod: any) => {
        if (
          prod.id == filteredProducts[0].id &&
          prod.size == filteredProducts[0].size
        ) {
          prod.quantity++;
        }
      });
    }

    localStorage.setItem(`products`, JSON.stringify(products));
    console.log(localStorage.getItem('products'));
  }

  // removeFromCart(id: any) {
  //   let products = this.getAllProductsFromStorage().filter(
  //     (p: any) => p.id != id
  //   );
  //   localStorage.setItem(`products`, JSON.stringify(products));
  // }
  removeFromCart(product: any) {
    const allProducts = this.getAllProductsFromStorage();
    let products: any;
    for (let i = 0; i < allProducts.length; i++) {
      if (
        allProducts[i].id == product.id &&
        allProducts[i].size == product.size
      ) {
        allProducts[i].quantity--;
      }
    }
    products = allProducts.filter((prod: any) => {
      return prod.quantity > 0;
    });
    localStorage.setItem(`products`, JSON.stringify(products));
  }

  getAllProductsFromStorage() {
    return JSON.parse(localStorage.getItem('products') ?? '[]');
  }
}
