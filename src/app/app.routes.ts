import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductsComponentComponent } from './products-component/products-component.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent, title: 'home' },
  { path: 'about', component: AboutComponent, title: 'about' },
  { path: 'contact', component: ContactComponent, title: 'contact' },
  {
    path: 'products',
    component: ProductsComponentComponent,
    title: 'products',
  },
  { path: '**', component: NotFoundComponent, title: 'Not Found' },
];
