import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event-service.service';
import { Event } from '../../models/event';
import { EventComponent} from '../event/event.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private eventService: EventService) { }
  events: Event[];

  ngOnInit() {

    this.getEvents();

  }

  getEvents(): void {
    this.events = this.eventService.getEvents();
  }

}
