import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event-service.service';
import { UserService } from '../../services/user.service';
import { AuthenticationService } from '../../services/authentication.service';
import { Event } from '../../models/event';
import { Tag } from '../../models/tag';
import { User } from '../../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  profileUser: User;
  userId: number;
  events: Event[];
  categories: Tag[];
  tevents: Event[];
  otherEvents: Event[];
  error: string;
  imageSource: string;
  mySlideOptions = { dots: false, nav: true};

  config: SwiperOptions = {
    autoplay: 5000, // Autoplay option having value in milliseconds
    initialSlide: 1, // Slide Index Starting from 0
    slidesPerView: 3, // Slides Visible in Single View Default is 1
    pagination: '.swiper-pagination', // Pagination Class defined
    paginationClickable: true, // Making pagination dots clicable
    nextButton: '.swiper-button-next', // Class for next button
    prevButton: '.swiper-button-prev', // Class for prev button
    spaceBetween: 10 // Space between each Item
  };

  constructor(private userService: UserService, private eventService: EventService,
              private authenticationService: AuthenticationService) {
                this.categories = [];
                this.otherEvents = [];
              }

  ngOnInit() {
    if (localStorage.getItem('currentUser')) {
      this.userId = this.authenticationService.userId;
      this.profileUser = new User();
      this.getUserInfo();
    }
    this.getEvents();
  }
  
  getUserInfo() {
    this.userService.getUser(this.userId)
    .subscribe(user => {
      this.profileUser = user;
      this.categories = this.categories.concat(this.profileUser.interests);
    },
    error => {
      this.error = error;
    });
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
        this.events = events;
        this.events.forEach(event => {
          // check if the event has tags
          if (event.tags.length > 0) {
            event.tags.forEach(tag => {
              if (!this.categories.includes(tag)) { this.categories.push(tag); }
            });
          } else {
            // add the event to a list of "other" events if there are no tags
            this.otherEvents.push(event);
          }
        });
      });
  }



}
