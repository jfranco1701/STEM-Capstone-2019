import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject } from 'rxjs';
import { first, takeUntil } from 'rxjs/operators';

import { SearchTermChangeService } from '../../../services/search-term-change.service';
import { Event } from '../../../models/event';
import { EventService } from '../../../services/event-service.service';


@Component({
  selector: 'app-search',
  templateUrl: './event-search.component.html',
  styleUrls: ['./event-search.component.scss']
})
export class EventSearchComponent implements OnInit, OnDestroy {
  private unsubscribe = new Subject<void>();

  public currentSearchTerm: string;
  public events: Event[] = [];
  public eventMap = new Map<string, Event>();
  public singleChildRowDetail = true;
  public loading = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private searchTermChangeService: SearchTermChangeService,
    private eventService: EventService) {
  }

  ngOnInit(): void {

    // listen to searchTermChangeService observable
    // to re-sort the viewable events to match user search
    // from the header component
    this.listenForSearchTermChanges();

    // pull all events and mash together 
    // the name, date, and other fields
    this.pullAndIndexEvents();

    this.route.paramMap
      .pipe(first(), takeUntil(this.unsubscribe))
      .subscribe((paramMap) => {
        if (paramMap.has('term')) {
          this.currentSearchTerm = paramMap.get('term');
          this.searchCachedEventsByTerm(this.currentSearchTerm);
        }
      });
  }

  ngOnDestroy(): void {
    this.searchTermChangeService.clearSearchTerm();
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  private listenForSearchTermChanges(): void {
    this.searchTermChangeService.searchTerm
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((searchTerm) => {
        this.navigateToSearchTerm(searchTerm);
        this.currentSearchTerm = searchTerm;
        this.searchCachedEventsByTerm(this.currentSearchTerm);
      });
  }

  private searchCachedEventsByTerm(searchTerm: string): void {

    this.loading = true;

    searchTerm = searchTerm.toLowerCase();
    console.log(searchTerm);
    // clear out matching events
    this.events = [];
    this.eventMap.forEach((event, hash) => {
      if (hash.indexOf(searchTerm) > -1) {
        this.events.push(event);
      }
    });

    this.loading = false;
  }

  private pullAndIndexEvents(): void {
    this.loading = true;

    this.eventService.getEvents()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((events) => {
        this.events = events;
        this.indexEvents(this.events);
        if (this.currentSearchTerm) {
          this.searchCachedEventsByTerm(this.currentSearchTerm);
        }
        this.loading = false;
      }, (err) => {
        console.error(err);
        this.loading = false;
      });
  }

  private indexEvents(events: Event[]): void {
    this.loading = true;
    const separator = '|';
    this.eventMap = new Map<string, Event>();
    [...events].map((event) => {
      const eventHash = [
        event.name,
        event.date,
        event.event_type
    ].join(separator).toLowerCase();
      this.eventMap.set(eventHash, event);
    });
    this.loading = false;
  }

  private navigateToSearchTerm(searchTerm: string): void {
    this.router.navigate(['events/search', searchTerm]);
  }
}
