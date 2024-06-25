import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AdminloginService } from './adminlogin.service'; 

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private adminloginService: AdminloginService, private router: Router) {}

  canActivate(): boolean {
    if (this.adminloginService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/administrative-login']);
      return false;
    }
  }
}
