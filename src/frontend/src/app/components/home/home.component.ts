import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event-service.service';
import { Event } from '../../models/event';
import { EventCarousel } from 'src/app/models/eventcarousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private eventService: EventService) { }
  events: Event[];
  mySlideOptions={items: 3, dots: false, nav: true, autoWidth: true, autoHeight: true};
  carousels: EventCarousel[];

  ngOnInit() {

    this.getEvents();

  }

  getEvents(): void {
    this.eventService
    .getEvents()
    .subscribe(events => {
      this.events = events;
      this.carousels = [ { name: 'Favorites', events: events }, { name: 'Recently Added', events: events }, { name: 'Tag', events: events}, { name: 'Happening soon', events: events}];
    });
  }

}
