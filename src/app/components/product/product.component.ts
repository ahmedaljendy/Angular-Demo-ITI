import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';

interface Product {
  prductId: number;
  imageURL: string;
  productName: string;
  productPrice: number;
  onSale: boolean;
}

@Component({
  selector: 'app-product',
  imports: [ProductCardComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  products: Product[] = [
    {
      prductId: 1,
      imageURL: 'https://cdn-icons-png.flaticon.com/128/1312/1312091.png',
      productName: 'Bottles',
      productPrice: 20,
      onSale: true,
    },
    {
      prductId: 2,
      imageURL: 'https://cdn-icons-png.flaticon.com/128/1223/1223079.png',
      productName: 'Mugs',
      productPrice: 15,
      onSale: false,
    },
    {
      prductId: 3,
      imageURL: 'https://cdn-icons-png.flaticon.com/128/3429/3429142.png',
      productName: 'Bags',
      productPrice: 30,
      onSale: true,
    },
  ];
}
