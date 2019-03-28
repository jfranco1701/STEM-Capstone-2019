import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    private apiLoginUrl: string;
    private apiRegisterUrl: string;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
        this.apiLoginUrl = 'http://localhost:8000/api/login/';
        this.apiRegisterUrl = 'http://localhost:8000/api/v1/users/';
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(email: string, password: string) {
         return this.http.post<any>(`${this.apiLoginUrl}`, { email, password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }

                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }

    register(username: string, email: string, password: string, first_name: string, last_name: string, date_of_birth: Date) {
          return this.http.post<any>(`${this.apiRegisterUrl}`, { username, email, password, last_name, first_name, date_of_birth })
          .pipe(map(user => {
              console.log(user);
              this.currentUserSubject.next(user);
          }));
      }
}
