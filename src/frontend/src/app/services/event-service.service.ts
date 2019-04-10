import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, retry } from 'rxjs/operators';
import { Event } from '../models/event';
import { Tag } from '../models/tag';
import { Cacheable } from 'ngx-cacheable';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private eventApiUrl: string;
  private user: any;

  constructor(private http: HttpClient) {
    this.eventApiUrl = environment.eventsApiUrl;
  }

  @Cacheable()
  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.eventApiUrl);
  }

  getEvent(id: number): Observable<Event> {
    var getEventUrl = this.eventApiUrl + id.toString();
    return this.http.get<Event>(getEventUrl);
  }

  @Cacheable()
  search(searchTerm: string): Observable<Event[]> {
    return this.http.get<Event[]>(`/api/v1/events/search/${searchTerm}`);
  }

  addEvent(eventName: string, eventDate: Date, eventType: string): Observable<Event> {
    const obj = {
      name: eventName,
      date: eventDate.toLocaleDateString('en-US'),
      event_type: eventType,
      tags: []
    };

    var user = JSON.parse(localStorage.currentUser);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + user.token
      })
    };

    return this.http.post<any>(this.eventApiUrl, obj, httpOptions).pipe(
      retry(3),
      tap(_ => console.log('add event')),
      catchError(this.handleError)
    )
  }

  updateEvent(id: number, eventName: string, eventDate: Date, eventType: string, tags: Tag[]): Observable<Event> {
    const obj = {
      name: eventName,
      date: eventDate.toLocaleDateString('en-US'),
      event_type: eventType,
      tags: tags
    };

    var user = JSON.parse(localStorage.currentUser);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + user.token
      })
    };

    // Note the trailing slash, Django setting
    var updateEventUrl = this.eventApiUrl + id.toString() + "/";
    console.log(updateEventUrl);
    return this.http.put<any>(updateEventUrl, obj, httpOptions).pipe(
      retry(3),
      tap(_ => console.log('update event')),
      catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
