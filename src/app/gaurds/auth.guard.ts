import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    // Check if the token is present in local storage
    const token = localStorage.getItem('token');

    if (token) {
      // User is authenticated, allow access
      return true;
    } else {
      // User is not authenticated, redirect to the login page
      this.router.navigate(['login']);
      return false;
    }
  }
  
}
