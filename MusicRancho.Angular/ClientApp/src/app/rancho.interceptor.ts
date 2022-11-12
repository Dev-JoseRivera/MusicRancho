import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable()
export class RanchoInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    private service: AuthService
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let auth_header = '';

    auth_header = this.service.getAuthorizationHeaderValue();

    request = request.clone({
      setHeaders: {
        Authorization: this.service.getAuthorizationHeaderValue()
      }
    });
    
    return next.handle(request).pipe(
      tap({
        next: (event) => {
          return event;
        },
        error: (error) => {
          if (error.status == 401) {
            this.service.signOut();
          }
          if (error.status == 403) {
            this.router.navigate([`forbidden`]);
          }
        }
      }));
  }  
}
