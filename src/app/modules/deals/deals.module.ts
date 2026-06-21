import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DealComponent } from './deal/deal.component';
import {DealsRoutingModule} from "./deals-routing.module";
import {ShopService} from "../shop/shop.service";



@NgModule({
  declarations: [
    DealComponent
  ],
  imports: [
    CommonModule,
    DealsRoutingModule
  ],
  providers: [ShopService],
})
export class DealsModule { }
