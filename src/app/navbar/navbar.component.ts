import { ShoppingCartService } from './../shopping-cart/shopping-cart.service';
import { ProductsService } from './../products/products.service';
import {
  Route,
  Router,
  ActivatedRoute,
  RouterStateSnapshot,
} from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  data: any;
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private shoppingCartService: ShoppingCartService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  openCart(boolean: boolean) {
    this.shoppingCartService.getShowCartStatus(boolean);
  }
}
