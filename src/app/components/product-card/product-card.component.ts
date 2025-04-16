import { Component, input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  name = input.required<string>();
  image = input.required<string>();
  price = input.required<number>();
  onSale = input.required<boolean>();
}
