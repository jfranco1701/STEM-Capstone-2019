import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Location } from '@angular/common';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError, tap, retry } from 'rxjs/operators';
import { IUser } from '../interfaces/IUser';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private urlDetail: string;

  constructor(private http: HttpClient, private locationService: Location) {
    this.urlDetail = 'http://localhost:8000/api/v1/users/';
  }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.urlDetail);
  }

  addUser(
    userName: string,
    emailAddress: string,
    firstName: string,
    lastName: string,
    dob: Date,
    org: number,
    userType: number,
    isStudent: boolean
  ): Observable<IUser> {
    const obj = {
      username: userName,
      email: emailAddress,
      first_name: firstName,
      last_name: lastName,
      date_of_birth: dob.toISOString().slice(0, 10),
      organization: org,
      user_type: userType,
      is_student: isStudent,
    };

    return this.http.post<IUser>(this.urlDetail, obj).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
