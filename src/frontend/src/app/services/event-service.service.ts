import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap, retry } from 'rxjs/operators';
import { Event } from '../models/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private eventApiUrl: string;
  private user: any;

  constructor(private http: HttpClient) {
    this.eventApiUrl = 'http://localhost:8000/api/v1/events';
    this.user;
  }

  getEvents(): Observable<Event[]> {
    this.user = JSON.parse(localStorage.currentUser);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.user.token
      })
    };

    return this.http.get<Event[]>(this.eventApiUrl, httpOptions);
    // return this.http.get<Event[]>(this.eventApiUrl);
  }

  addEvent(eventName: string, eventDate: Date, eventType: string) {
    const obj = {
      name: eventName,
      date: eventDate,
      event_type: eventType
      // organizer: organizer,
    };

    var user = JSON.parse(localStorage.currentUser);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + user.token
      })
    };

    return this.http.post<Event>(this.eventApiUrl, obj, httpOptions).pipe(
      retry(3),
      tap(_ => console.log('add event')),
    )
  }
}
