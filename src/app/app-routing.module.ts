import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyPageComponent } from './buy-page/buy-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'promotions', pathMatch: 'full' }, // Rota principal, assim que entrar no site
  {
    path: 'promotions',
    component: ProductsComponent,
  },
  {
    path: 'shirts',
    component: ProductsComponent,
  },
  {
    path: 'pants',
    component: ProductsComponent,
  },
  {
    path: 'shoes',
    component: ProductsComponent,
  },
  {
    path: 'hats',
    component: ProductsComponent,
  },
  {
    path: 'details/:id',
    component: ProductDetailsComponent,
  },
  {
    path: 'buypage',
    component: BuyPageComponent,
  },
  // Faltam as rotas do carrinho de compras e de formulario para compra
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
