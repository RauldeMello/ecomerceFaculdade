import { ProductsService } from './products.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: any;
  constructor(
    private productsService: ProductsService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.productsService.getProducts(this.route.url).subscribe((products) => {
      this.products = products;
      console.log(products);
    });
  }
}
