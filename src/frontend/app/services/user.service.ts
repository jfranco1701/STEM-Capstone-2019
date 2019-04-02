import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Location } from '@angular/common';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError, tap, retry } from 'rxjs/operators';
import { User } from '../models/user';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiLoginUrl: string;

  constructor(private http: HttpClient, private locationService: Location) {
    this.apiLoginUrl = environment.apiHostAndPort + '/api/v1/users/';
  }

  getUser(userId: number): Observable<User> {
    return this.http.get<User>(`${this.apiLoginUrl + userId + '/'}`).pipe(
      map(user => {
        return user;
      })
    );
  }

  updateUser(userId: number, userObject: any): Observable<User> {
    return this.http.patch<any>(`${this.apiLoginUrl + userId + '/'}`, userObject)
      .pipe(
      map(user => {
        return user;
      })
    );
  }
}
