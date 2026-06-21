import { Injectable } from '@angular/core';

@Injectable()
export class ShopService {

  private shopName = "Shopy";
  counter = 0;
  constructor() {
    console.log("Shop Service Created");
    this.counter = 0;
  }

  getShopName() {
    return this.shopName;
  }

  incrementCounter() {
    this.counter++;
  }

  getCounter() {
    return this.counter;
  }
}
