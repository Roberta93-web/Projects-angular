import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  menuVariable: boolean = false;
  menu_icon_variable: boolean = false;
  openMenu() {
    this.menuVariable = !this.menuVariable;
    this.menu_icon_variable = !this.menu_icon_variable;
  }

  images = [{ img1: '' }, { img1: '' }, { img1: '' }];
}
