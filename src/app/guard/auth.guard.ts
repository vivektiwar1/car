import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
 
import { AuthService } from '../_services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor (private authService: AuthService, private router: Router) {}
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
   if (this.authService.loggedIn()) {
     return true;
   }
   this.router.navigate(['/home']);
   return false;
  }
}
