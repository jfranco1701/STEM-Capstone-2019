import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from '../models/user';
import { USERS } from '../models/mock-users';
import { throwMatDialogContentAlreadyAttachedError } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // constructor() { }

   getUsers(): User[] {
     return USERS;
   }

   // http options used for making API calls
   private httpOptions: any;

   // the actual JWT token
   public token: string;
 
   // the token expiration date
   public token_expires: Date;
 
   // the username of the logged in user
   public username: string;
 
   // error messages received from the login attempt
   public errors: any = [];
 
   constructor(private http: HttpClient) {
     this.httpOptions = {
       headers: new HttpHeaders({'Content-Type': 'application/vnd.api+json'})
     };
   }
 
   // Uses http.post() to get an auth token from djangorestframework-jwt endpoint
   public login(user) {
     //console.log('login success', JSON.stringify(user));
     this.http.post('/api/token/auth', '{"data":{"type": "ObtainJSONWebToken","attributes": {"username": "'+ user.username +'","password":"'+ user.password+'"}}}', this.httpOptions).subscribe(
       data => {
         console.log('login success', data);
         console.log(data["data"]["token"]);
         this.updateData(data["data"]["token"], user);
       },
       errors => {
        console.log('is here');
         console.error('login error', errors);
         this.errors = errors;
         
         this.handleErros();
       }
     );
   }
 
   /**
    * Refreshes the JWT token, to extend the time the user is logged in
    */
   public refreshToken() {
     this.http.post('/api/token/refresh', JSON.stringify({token: this.token}), this.httpOptions).map(
       data => {
         console.log('refresh success', data);
       },
       errors => {
         console.error('refresh error', errors);
         this.errors = errors;
       }
     );
   }
 
   public logout() {
     window.location.href='/home';
    localStorage.setItem('loggeduser', null);
   }
 
   private updateData(token, user) {
     this.token = token;
     this.errors = [];
     user.isauthenticated = true;
     user.token = this.token;
          
     window.location.href='/eventview';

     // decode the token to read the username and expiration timestamp
     const token_parts = this.token.split(/\./);
     const token_decoded = JSON.parse(window.atob(token_parts[1]));
     this.token_expires = new Date(token_decoded.exp * 1000);

     user.token = token_decoded;
     user.token_expires= this.token_expires;
     user.decoded_username = token_decoded.username;
     // loggeduser is an userobject
     localStorage.setItem('loggeduser', JSON.stringify(user) );

     var getObj = JSON.parse(localStorage.getItem('loggeduser'));
     console.log( getObj );
   }

   private handleErros() {
    alert("Login Failed");
  }
 
 }