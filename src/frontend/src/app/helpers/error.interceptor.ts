import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError(err => {
        let customMessage = '';

        if (err.status === 401) {
          // auto logout if 401 response returned from api
          this.authenticationService.logout();
          location.reload(true);
        }

        // custom error message
        if (err.status === 400 && err.error.non_field_errors.length > 0) {
          if (err.error.non_field_errors[0] === 'Unable to log in with provided credentials.') {
            customMessage = 'Invalid email address or password entered!';
          }
        }

        const error = customMessage || err.error.message || err.error.non_field_errors || err.statusText;
        return throwError(error);
      })
    );
  }
}
