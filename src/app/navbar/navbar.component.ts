import { Component } from '@angular/core';

interface NavbarLink {
  label: string;
  url: string;
  active: boolean;
}
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  menuVariable: boolean = false;
  menu_icon_variable: boolean = false;

  openMenu() {
    this.menuVariable = !this.menuVariable;
    this.menu_icon_variable = !this.menu_icon_variable;
  }

  navbarLinks: NavbarLink[] = [
    { label: 'HOME', url: '', active: false },
    { label: 'ABOUT', url: 'about', active: false },
    { label: 'COURSES', url: 'courses', active: false },
    { label: 'SHOP', url: 'shop', active: false },
    { label: 'CONTACT', url: 'contact', active: false },
  ];

  setActive(link: NavbarLink) {
    this.navbarLinks.forEach((navLink) => (navLink.active = false));

    link.active = true;
  }
}
