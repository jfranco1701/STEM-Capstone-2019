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
  categories: String[];

  mySlideOptions={dots: false, nav: true};

  ngOnInit() {

    this.getEvents();

  }

  getEveByCat(cat: String): Event[]
  {
    
    //var tevents = this.events.filter(event => event.tags.filter(tag => tag.name == "Math").length > 0);
    var tevents : Event[] = [];
    this.events.forEach(event => { if(event.tags.filter(tag =>tag.name == cat).length > 0) tevents.push(event)  });
    console.log(this.categories);

    return tevents;

  }

  getEvents(): void {
    this.eventService
    .getEvents()
    .subscribe(events => {
      this.categories=[];
      this.events = events;
      this.events.forEach(event => {
        event.tags.forEach( tag => {
          if(!this.categories.includes(tag.name)) { this.categories.push(tag.name) }; 
          console.log(this.categories);
        });
      
      });

    });
  }

}
