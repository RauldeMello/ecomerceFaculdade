import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { BuyPageService } from './buy-page.service';

@Component({
  selector: 'buy-page',
  templateUrl: './buy-page.component.html',
  styleUrls: ['./buy-page.component.css'],
})
export class BuyPageComponent implements OnInit {
  form: any;
  products: any;
  showPaymentMethod: boolean = false;
  cartPrice: any;
  constructor(
    private formBuilder: FormBuilder,
    private buyPageService: BuyPageService
  ) {}

  ngOnInit(): void {
    this.formConfig();
    this.showPaymentMethod = false;
    this.products = this.buyPageService.getProductsFromcart();
    this.setCartPrice();
    console.log(this.products);
  }

  setCartPrice(): void {
    let c = 0;
    for (let value of this.products) {
      value.price = parseFloat(value.price);
      c += value.price * value.quantity;
    }
    this.cartPrice = c;
  }

  removeFromCart(id: any) {
    let products = this.buyPageService
      .getProductsFromcart()
      .filter((p: any) => p.id != id);
    localStorage.setItem(`products`, JSON.stringify(products));
    this.products = this.buyPageService.getProductsFromcart();
  }

  sendToServer() {
    this.showPaymentMethod = true;
    this.buyPageService
      .sendToServer(this.form.value)
      .subscribe((res) => console.log(res));
    this.form.reset();
  }

  formConfig() {
    this.form = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      country: [null, Validators.required],
      streetAddress: [null, Validators.required],
      city: [null, Validators.required],
      state: [null, Validators.required],
      zip: [null, Validators.required],
    });
  }
}
