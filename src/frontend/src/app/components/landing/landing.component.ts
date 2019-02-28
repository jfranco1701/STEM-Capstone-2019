import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event-service.service';
import { Event } from '../../models/event';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(private eventService: EventService) { }
  events:  Event[];

  ngOnInit() {

    this.getEvents();

  }


  getEvents(): void {
    this.events = this.eventService.getEvents();
  }

}
