import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = [
    { id: 1, name: 'Product 1', price: 100, description: 'Description for Product 1', imageUrl: './assets/image/wm.jpg' },
    { id: 2, name: 'Product 2', price: 200, description: 'Description for Product 2', imageUrl: './assets/image/pen.jpeg' },
    { id: 3, name: 'Product 3', price: 300, description: 'Description for Product 3', imageUrl: './assets/image/screen.jpeg' },
    { id: 4, name: 'Product 4', price: 400, description: 'Description for Product 4', imageUrl: './assets/image/speaker.jpeg' },
    { id: 5, name: 'Product 5', price: 500, description: 'Description for Product 5', imageUrl: './assets/image/watch.avif' }
  ];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }
}