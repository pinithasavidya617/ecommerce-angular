import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import {ShopComponent} from "./components/shop/shop.component";
import {MatIconModule} from "@angular/material/icon";
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import {ShopService} from "./shop.service";


@NgModule({
  declarations: [
    ShopComponent,
    ProductDetailComponent,
    CreateProductComponent,
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    MatIconModule
  ],
  providers: [
    ShopService,
  ]
})
export class ShopModule { }
