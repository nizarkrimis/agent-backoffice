import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router: Router) {}

  logout() {
    // Clear the token from local storage
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    //logic redirecting to the login page
    this.router.navigate(['login']);
  }
}
