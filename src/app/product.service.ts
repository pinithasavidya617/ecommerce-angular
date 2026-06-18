import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' //Root level service - have access for everywhere in project
})
export class ProductService {


  products = [
    {
      id: 1,
      name: 'Wireless Headphones',
      image: 'assets/products/headphones.png',
      price: 59.99,
      oldPrice: 89.99,
      tag: 'NEW',
      category: 'electronic',
      rating : '4.5',
    },
    {
      id: 2,
      name: 'Smart Watch Series 5',
      image: 'assets/products/watch.png',
      price: 129.99,
      oldPrice: 199.99,
      tag: 'SALE',
      category: 'electronic',
      rating : '4.5',

    },
    {
      id: 3,
      name: 'Digital Camera',
      image: 'assets/products/camera.png',
      price: 499.99,
      oldPrice: 699.99,
      tag: 'HOT',
      category: 'electronic',
      rating : '4.5',

    },
    {
      id: 4,
      name: 'Stylish Backpack',
      image: 'assets/products/bag.png',
      price: 39.99,
      oldPrice: 59.99,
      tag: '',
      category: 'fashion',
      rating : '4.5',

    },
    {
      id: 5,
      name: 'Sport Shoes',
      image: 'assets/products/shoes.png',
      price: 49.99,
      oldPrice: 79.99,
      tag: '',
      category: 'fashion',
      rating : '4.5',

    },
    {
      id: 6,
      name: 'Luxury Perfume',
      image: 'assets/products/perfume.png',
      price: 29.99,
      oldPrice: 49.99,
      tag: '',
      category: 'cosmetic',
      rating : '4.5',
    },
    {
      id: 7,
      name: 'Wireless Earbuds',
      image: 'assets/products/earbuds.png',
      price: 39.99,
      oldPrice: 69.99,
      tag: '',
      category: 'electronic',
      rating : '4.5',
    },
    {
      id: 8,
      name: 'Classic Sunglasses',
      image: 'assets/products/glasses.png',
      price: 19.99,
      oldPrice: 29.99,
      tag: '',
      category: 'fashion',
      rating : '5',
    }
  ];

  constructor() { }

  getAllProducts() {
    return this.products;
  }

  getFeaturedProducts(): Product[] {
    return this.products.filter(item => item.tag === 'NEW');
  }


  getFilteredProducts(filter: ProductFilter) {
    return this.products.filter(

      item => {
        return (
          (filter.category === undefined || item.category === filter.category) &&
          (filter.rating === undefined || isNaN(Number(filter.rating)) ||  item.rating === filter.rating) &&
          (filter.minPrice === undefined || isNaN(filter.minPrice)|| item.price >= filter.minPrice) &&
          (filter.maxPrice === undefined || isNaN(filter.maxPrice)|| item.price <= filter.maxPrice)

        );
      }
    );
  }
}

export interface Product{
  id: number;
  name: string;
  image: string;
  price: number;
  oldPrice: number;
  tag: string;
  category: string;
  rating: string;
}

export interface ProductFilter {
  category: string;
  rating: string;
  minPrice: number;
  maxPrice: number;
}
