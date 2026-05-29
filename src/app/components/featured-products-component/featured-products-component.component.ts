import {Component, OnInit} from '@angular/core';
import {Product, ProductService} from "../../product.service";

@Component({
  selector: 'app-featured-products-component',
  templateUrl: './featured-products-component.component.html',
  styleUrls: ['./featured-products-component.component.scss']
})
export class FeaturedProductsComponentComponent implements OnInit {

  products: Product[] = []

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.products = this.productService.getFeaturedProducts()
  }
}
