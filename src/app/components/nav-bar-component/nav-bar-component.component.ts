import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-bar-component',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-bar-component.component.html',
  styleUrl: './nav-bar-component.component.css',
})
export class NavBarComponentComponent {
  imageUrl = 'https://cdn-icons-png.flaticon.com/128/679/679922.png';
}
