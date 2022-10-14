import { Route, Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  products: any;
  cartPrices: any;

  constructor(
    private shoppingCartService: ShoppingCartService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.products = this.shoppingCartService.getAllProductsFromStorage();
    this.setCartPrice();
    console.log(this.products);
  }

  closeCart() {
    this.shoppingCartService.getShowCartStatus(false);
  }

  removeFromCart(id: any) {
    this.shoppingCartService.removeFromCart(id);
    this.products = this.shoppingCartService.getAllProductsFromStorage();
    this.showSucess;
    this.setCartPrice();
  }

  setCartPrice(): void {
    let c = 0;
    for (let value of this.products) {
      value.price = parseFloat(value.price);
      c += value.price * value.quantity;
    }
    this.cartPrices = c;
  }

  showSucess() {
    this.toastr.success('Product removed from the cart');
  }
}
