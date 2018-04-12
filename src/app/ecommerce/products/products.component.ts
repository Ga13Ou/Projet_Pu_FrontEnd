import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products: any[] = [];
  num = 1;

  constructor() {
    for (this.num; this.num <= 20; this.num += 1) {
     this.addProducts(this.num);
    }
  }

  addProducts(i) {
    this.products.push({
      id: i,
      price: (Math.random() * (0.00 - 10.00) + 10.00).toFixed(2),
      status: ['', '', '', 'sale'][Math.floor(Math.random() * 4)],
      discounted: ['', '', '', 'discounted'][Math.floor(Math.random() * 4)],
      discount: (Math.random() * (0.00 - 10.00) + 10.00).toFixed(2),
      name: [
        'Blouse',
        'Casual Shirt',
        'Plaid Shirt',
        'Long Sleeve',
        'Denim Jacked',
        'Fur Coat',
        'Crop Top',
        'Stripe Tee'][Math.floor(Math.random() * 8)],
      description: ['B & W', 'Grey', 'Black', 'Green', 'Black'][Math.floor(Math.random() * 5)]
    });
  }

  isOver(): boolean {
    return window.matchMedia(`(max-width: 960px)`).matches;
  }

  isMac(): boolean {
    let bool = false;
    if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
      bool = true;
    }
    return bool;
  }
}
