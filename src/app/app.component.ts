import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponentComponent } from './components/nav-bar-component/nav-bar-component.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavBarComponentComponent,
    ProductComponent,
    CategoryComponent,
    FooterComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'test';
}
