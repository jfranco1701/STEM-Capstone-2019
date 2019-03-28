import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event-service.service';
import { Event } from '../../models/event';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private eventService: EventService) { }
  events: Event[];
  mySlideImages = [1,2,3,4,5,6,7,8,9,10].map((i)=> `https://picsum.photos/640/480?image=${i}`);
  myCarouselImages =[1,2,3,4,5,6].map((i)=>`https://picsum.photos/640/480?image=${i}`);
  mySlideOptions={items: 3, dots: false, nav: true, autoWidth: true, autoHeight: true};
  myCarouselOptions={items: 3, dots: false, nav: true};

  ngOnInit() {

    this.getEvents();

  }

  getEvents(): void {
    this.eventService
    .getEvents()
    .subscribe(events => {
      this.events = events;
    });
  }

}
