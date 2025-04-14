import { Component } from '@angular/core';

interface Category {
  id: number;
  imageURL: string;
  name: string;
  price: number;
}

@Component({
  selector: 'app-category',
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent {
  categories: Category[] = [
    {
      id: 1,
      imageURL: 'https://cdn-icons-png.flaticon.com/128/17307/17307576.png',
      name: 'Drinkware',
      price: 50,
    },
    {
      id: 2,
      imageURL: 'https://cdn-icons-png.flaticon.com/128/3225/3225016.png',
      name: 'Accessories',
      price: 30,
    },
  ];
}
