import { Injectable } from '@angular/core';
import { Event } from '../models/event';
import { EVENTS } from '../models/mock-events';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  getEvents(): Event[] {

    return EVENTS;

  }

}
