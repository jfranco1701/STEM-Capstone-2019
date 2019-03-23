import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Event } from '../models/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private eventApiUrl: string;

  constructor(private http: HttpClient) {
    this.eventApiUrl = 'http://localhost:8000/api/v1/events';
  }

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.eventApiUrl);
  }

}
