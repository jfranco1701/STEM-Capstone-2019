import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UserLogin } from '../models/UserLogin';
import { RegisterUser } from '../models/RegisterUser';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<UserLogin>;
    public currentUser: Observable<UserLogin>;
    private apiLoginUrl: string;
    private apiRegisterUrl: string;

    constructor(private http: HttpClient, private router: Router) {
        this.currentUserSubject = new BehaviorSubject<UserLogin>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
        this.apiLoginUrl = environment.apiHostAndPort + '/api/login/';
        this.apiRegisterUrl = environment.apiHostAndPort + '/api/v1/users/';
    }

    public get currentUserValue(): UserLogin {
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

    register(username: string, emailAddress: string, password: string, firstName: string, lastName: string,
             dob: string, addressRes: string, cityRes: string, stateRes: string, zipCode: string, phoneNumber: string,
             parentId?: string) {

          const registerUser: RegisterUser = new RegisterUser();
          if (parentId) {
            registerUser.parent_id = parentId;
          }

          registerUser.username = username;
          registerUser.email = emailAddress;
          registerUser.first_name = firstName;
          registerUser.last_name = lastName;
          registerUser.password = password;
          if (dob) {
            registerUser.date_of_birth = dob;
          }
          registerUser.address = addressRes;
          registerUser.city = cityRes;
          registerUser.state = stateRes;
          registerUser.zip_code = zipCode;
          registerUser.phone = phoneNumber;

          console.log(registerUser);

          return this.http.post<any>(`${this.apiRegisterUrl}`, registerUser)
          .pipe(map(user => {
            console.log(user);
            return user;
          }));
      }
}
