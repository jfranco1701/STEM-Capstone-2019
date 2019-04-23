import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event-service.service';
import { Event } from '../../models/event';
import { Tag } from 'src/app/models/tag';
import { EventCarousel } from '../../models/event-carousel';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserLogin } from 'src/app/models/userlogin';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private eventService: EventService, private authenticationService: AuthenticationService) { }
  events: Event[];
  categories: String[];
  eventCarousels: EventCarousel[] = [];

  mySlideOptions = { dots: false, nav: true };

  currentUser: UserLogin;
  userType: number;
  approvedToPostEvents: boolean;

  ngOnInit() {

    this.getEvents();

    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);

    this.userType = this.authenticationService.userType;
    this.approvedToPostEvents = this.authenticationService.approvedToPostEvents;
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
            if (!newCarousels.includes(tag)) {
              var newCarousel = new EventCarousel();
              newCarousel.name = tag;
              this.eventCarousels.push(newCarousel);
            };
          });
        });

        this.eventCarousels.forEach(carousel => {
          carousel.events = this.events.filter(event => event.tags.filter(tag => tag == carousel.name).length > 0);
        });
      });
  }
}