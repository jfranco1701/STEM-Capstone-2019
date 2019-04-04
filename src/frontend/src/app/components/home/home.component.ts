import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event-service.service';
import { Event } from '../../models/event';
import { Tag } from 'src/app/models/tag';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private eventService: EventService) { }
  events: Event[];
  categories: Tag[];

  tevents: Event[];
  mySlideOptions={items: 3, dots: false, nav: true, autoWidth: true, autoHeight: true};

  ngOnInit() {

    this.getEvents();

  }

  getEveByCat(cat: Tag): Event[]
  {
    this.tevents=[];
    this.events.forEach(event => { if(event.tags.includes(cat)) this.tevents.push(event)  });
    return this.tevents;
  }

  getEvents(): void {
    this.eventService
    .getEvents()
    .subscribe(events => {
      this.categories=[];
      this.events = events;
      this.events.forEach(event => {
        event.tags.forEach( tag => {
          if(!this.categories.includes(tag)) { this.categories.push(tag) };
        });

      });

    });
  }

}
