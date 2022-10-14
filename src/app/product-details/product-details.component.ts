import { ShoppingCartService } from './../shopping-cart/shopping-cart.service';
import { ProductDetailsService } from './product-details.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  constructor(
    private producDetailsService: ProductDetailsService,
    private route: ActivatedRoute,
    private shoppingCartService: ShoppingCartService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    const id: string = this.route.snapshot.params['id'];
    this.producDetailsService.getProduct(id).subscribe((res) => {
      this.product = res;
      console.log(res);
    });
  }

  sendToCart(product: any): void {
    this.shoppingCartService.sendToCart(product);
    console.log(product);
    this.showSuccess();
  }

  showSuccess() {
    this.toastr.success('Product added sucessfully!');
  }

  saveSize(size: any) {
    this.product.size = size;
  }
}
