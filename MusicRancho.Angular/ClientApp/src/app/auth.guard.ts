import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private isLoggedIn?: boolean;
  private observer?: Observable<boolean>;

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.isLoggedIn) {
        return true;
      }
      else {
        this.authService.signIn();
        return false;
      }
  }

  constructor(
    private authService: AuthService
  ) {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.observer = this.authService.getUserLoggedInEvents();

    this.observer.subscribe((result) => {
      this.isLoggedIn = result;
    })
  }
  
}
