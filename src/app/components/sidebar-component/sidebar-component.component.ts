import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {ProductServiceService} from "../../product-service.service";
import {ShopService} from "../../modules/shop/shop.service";

@Component({
  selector: 'app-sidebar-component',
  templateUrl: './sidebar-component.component.html',
  styleUrls: ['./sidebar-component.component.scss']
})
export class SidebarComponentComponent {

  productServiceCounter = 0;
  shopServiceCounter = 0;

  constructor(
    private navigation : Router,
    private productService: ProductServiceService,
    private shopService: ShopService
  ) {
  }

  public navigateToCategory( category: string) {
    this.navigation.navigate(['/shop'], {
      queryParams: {
        category: category
      },
    });
  }

  public goToHome() {
    this.navigation.navigate(['']);
  }

  public goToProducts() {
    this.navigation.navigate(['/products']);
  }

  public goToPromotion() {
    this.navigation.navigate(['/promotions']);
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
