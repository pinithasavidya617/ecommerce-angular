import {Component, OnInit} from '@angular/core';
import {ShopService} from "../../shop/shop.service";
import {ProductServiceService} from "../../../product-service.service";

@Component({
  selector: 'app-deal',
  templateUrl: './deal.component.html',
  styleUrls: ['./deal.component.scss']
})
export class DealComponent implements OnInit {
  productServiceCounter = 0;
  shopServiceCounter = 0;
  constructor( private shopService: ShopService, private productService: ProductServiceService) {
  }

  ngOnInit() {
    this.productServiceCounter = this.productService.getCounter();
    this.shopServiceCounter = this.shopService.getCounter();
  }

  public increment() {
    this.productService.increaseCounter();
    this.shopService.incrementCounter()
  }

  public update() {

    this.productServiceCounter = this.productService.getCounter();
    this.shopServiceCounter = this.shopService.getCounter();
  }
}
