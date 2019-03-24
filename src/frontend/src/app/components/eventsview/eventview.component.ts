import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event-service.service';
import { Event } from '../../models/event';

@Component({
  selector: 'app-Eventview',
  templateUrl: './Eventview.component.html',
  styleUrls: ['./Eventview.component.scss']
})
export class EventviewComponent implements OnInit {

  constructor(private eventService: EventService) { }
  events: Event[];

  ngOnInit() {

    this.getEvents();

  }

  getEvents(): void {
    this.events = this.eventService.getEvents();
  }

}
