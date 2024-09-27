import { Component } from '@angular/core';
import { faHome, faSignInAlt, faUser, faUserPlus , faGamepad } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isMenuOpen = false;
  faUser = faUser;
  faUserPlus = faUserPlus;
  faHome = faHome;
  faSignInAlt = faSignInAlt;
  faGamepad = faGamepad;
  

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
