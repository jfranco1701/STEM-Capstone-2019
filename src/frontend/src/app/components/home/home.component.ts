import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event-service.service';
import { Event } from '../../models/event';
import { Tag } from 'src/app/models/tag';
import { EventCarousel } from '../../models/event-carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private eventService: EventService) { }
  events: Event[];
  categories: String[];
  eventCarousels: EventCarousel[] = [];

  mySlideOptions = { dots: false, nav: true };

  ngOnInit() {

    this.getEvents();

  }

  getEvents(): void {
    this.eventService
      .getEvents()
      .subscribe(events => {
        this.categories = [];
        this.events = events;
        this.events.forEach(event => {
          event.tags.forEach(tag => {
            var newCarousels = this.eventCarousels.map(carousel => carousel.name);
            if (!newCarousels.includes(tag.name)) {
              var newCarousel = new EventCarousel();
              newCarousel.name = tag.name;
              this.eventCarousels.push(newCarousel);
            };
          });
        });

        this.eventCarousels.forEach(carousel => {
          carousel.events = this.events.filter(event => event.tags.filter(tag => tag.name == carousel.name).length > 0);
        });
      });
  }
}