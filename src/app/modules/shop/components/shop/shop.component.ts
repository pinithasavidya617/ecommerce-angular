import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  products = [
    {
      id: 1,
      name: 'Wireless Headphones',
      image: 'assets/products/headphones.png',
      price: 59.99,
      oldPrice: 89.99,
      tag: 'NEW',
      category: 'electronic',
    },
    {
      id: 2,
      name: 'Smart Watch Series 5',
      image: 'assets/products/watch.png',
      price: 129.99,
      oldPrice: 199.99,
      tag: 'SALE',
      category: 'electronic',
    },
    {
      id: 3,
      name: 'Digital Camera',
      image: 'assets/products/camera.png',
      price: 499.99,
      oldPrice: 699.99,
      tag: 'HOT',
      category: 'electronic',
    },
    {
      id: 4,
      name: 'Stylish Backpack',
      image: 'assets/products/bag.png',
      price: 39.99,
      oldPrice: 59.99,
      tag: '',
      category: 'fashion',
    },
    {
      id: 5,
      name: 'Sport Shoes',
      image: 'assets/products/shoes.png',
      price: 49.99,
      oldPrice: 79.99,
      tag: '',
      category: 'fashion',
    },
    {
      id: 6,
      name: 'Luxury Perfume',
      image: 'assets/products/perfume.png',
      price: 29.99,
      oldPrice: 49.99,
      tag: '',
      category: 'cosmetic',
    },
    {
      id: 7,
      name: 'Wireless Earbuds',
      image: 'assets/products/earbuds.png',
      price: 39.99,
      oldPrice: 69.99,
      tag: '',
      category: 'electronic',
    },
    {
      id: 8,
      name: 'Classic Sunglasses',
      image: 'assets/products/glasses.png',
      price: 19.99,
      oldPrice: 29.99,
      tag: '',
      category: 'fashion',
    }
  ];
  displayProducts = this.products

  constructor( private route: ActivatedRoute, private navigation: Router ) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const category = params['category'];
      if (category) {
        this.displayProducts = this.products.filter(item => item.category === category);
      } else {
        this.displayProducts = this.products;
      }
    })
  }

  public navigateToProduct(id: number) {
    // this.navigation.navigate(['/shop/product', 'furniture',id]);
    this.navigation.navigate(['/shop/product',id]);

  }
}
