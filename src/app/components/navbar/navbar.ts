import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class NavbarComponent {
  activeLink: string = 'home';

  setActive(link: string) {
    this.activeLink = link;
  }
}
