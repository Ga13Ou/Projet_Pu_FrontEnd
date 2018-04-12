import { Component } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  stars: number[] = [1, 2, 3, 4, 5];
  product = {
    price: (Math.random() * (0.00 - 10.00) + 10.00).toFixed(2),
    rating: Math.floor(Math.random() * 6),
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
  };

  messages: Object[] = [{
    from: 'Ali Connors',
    message: 'I will be in your neighborhood',
    photo: 'assets/images/face3.jpg',
    subject: 'Brunch this weekend?',
    rating: Math.floor(Math.random() * 6),
  }, {
    from: 'Trevor Hansen',
    message: 'Wish I could but we have plans',
    photo: 'assets/images/face6.jpg',
    subject: 'Brunch this weekend?',
    rating: Math.floor(Math.random() * 6),
  }, {
    from: 'Sandra Adams',
    message: 'Do you have Paris recommendations instead?',
    photo: 'assets/images/face4.jpg',
    subject: 'Brunch this weekend?',
    rating: Math.floor(Math.random() * 6),
  }];
}
