import { ShoppingCartService } from './shopping-cart/shopping-cart.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private shoppingCartService: ShoppingCartService) {}
  getShowCartStatus() {
    return this.shoppingCartService.sendShowCartStatus();
  }
  title = 'ecomerce';
}
