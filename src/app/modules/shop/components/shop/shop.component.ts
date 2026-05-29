import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Product, ProductService} from "../../../../product.service";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  displayProducts: Product[] = []

  constructor( private route: ActivatedRoute, private navigation: Router, private productService: ProductService) {
  }ngOnDestroy() {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      const category = params['category'];
      const rating = params['rating'];
      const minPrice = params['minPrice'];
      const maxPrice = params['maxPrice'];


      const filter = {
        category: category,
        rating: rating,
        minPrice: Number(minPrice),
        maxPrice: Number(maxPrice),
      }

      // http://localhost:4200/shop?maxPrice=50&minPrice=40
      this.displayProducts = this.productService.getFilteredProducts(filter)
    })
  }

  public navigateToProduct(id: number) {
    // this.navigation.navigate(['/shop/product', 'furniture',id]);
    this.navigation.navigate(['/shop/product',id]);

  }
}
