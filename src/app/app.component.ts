import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponentComponent } from './components/nav-bar-component/nav-bar-component.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavBarComponentComponent,
    ProductComponent,
    CategoryComponent,
    FooterComponent,
    NotFoundComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'test';
}
