import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShopComponent} from "./components/shop/shop.component";
import {ProductDetailComponent} from "./components/product-detail/product-detail.component";
import {CreateProductComponent} from "./compoents/create-product/create-product.component";

const routes: Routes = [
  { path: '', component: ShopComponent },
  { path: 'product/new', component: CreateProductComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'product/:category/:id', component: ProductDetailComponent },
  { path :'**' , redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
