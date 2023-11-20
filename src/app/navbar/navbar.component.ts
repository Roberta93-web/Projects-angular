import { Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @ViewChild('hamburger') hamburger!: ElementRef;
  @ViewChild('navMenu') navMenu!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.setupHamburgerClickEvent();
  }
  private setupHamburgerClickEvent() {
    this.hamburger.nativeElement.addEventListener('click', () => {
      this.toggleMenu();
    });

    const navLinks = this.navMenu.nativeElement.querySelectorAll('.nav-link');
    navLinks.forEach((navLink: HTMLElement) => {
      navLink.addEventListener('click', () => {
        this.hamburger.nativeElement.classList.remove('active');
        this.navMenu.nativeElement.classList.remove('active');
      });
    });
  }

  private toggleMenu() {
    this.hamburger.nativeElement.classList.toggle('active');
    this.navMenu.nativeElement.classList.toggle('active');
  }
}
