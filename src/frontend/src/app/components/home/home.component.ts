import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event-service.service';
import { Event } from '../../models/event';
import { Tag } from '../../models/tag';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  events: Event[];
  categories: Tag[];
  tevents: Event[];
  imageSource: string;
  mySlideOptions = { dots: false, nav: true };

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.getEvents();
  }

  getEveByCat(cat: Tag): Event[] {
    this.tevents = [];
    this.events.forEach(event => {
      if (event.tags.includes(cat)) { this.tevents.push(event); }
    });

    return this.tevents;
  }

  getEvents(): void {
    this.eventService
      .getEvents()
      .subscribe(events => {
        this.categories = [];
        this.events = events;
        this.events.forEach(event => {
          event.tags.forEach(tag => {
            if (!this.categories.includes(tag)) { this.categories.push(tag); }
          });
        });
      });
  }

}
