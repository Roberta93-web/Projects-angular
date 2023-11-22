import { Component } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent {
  products = [
    {
      image: 'assets/img/shop1.png',
      description: 'Oil Soap',
      price: '$5.00',
      button: 'ADD TO CART',
    },
    {
      image: 'assets/img/shop2.png',
      description: 'Oganic Soap',
      price: '$5.00',
      button: 'ADD TO CART',
    },
    {
      image: 'assets/img/shop3.png',
      description: 'Glycerin Soap',
      price: '$5.00',
      button: 'ADD TO CART',
    },
    {
      image: 'assets/img/shop4.png',
      description: 'Olive oil Soap',
      price: '$5.00',
      button: 'ADD TO CART',
    },
  ];
}
