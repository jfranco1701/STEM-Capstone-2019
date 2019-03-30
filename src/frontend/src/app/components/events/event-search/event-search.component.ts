import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subject } from 'rxjs';
import { first, takeUntil } from 'rxjs/operators';

import { SearchTermChangeService } from '../../../services/search-term-change.service';
import { Event } from '../../../models/event';
import { EventService } from '../../../services/event-service.service';

/* import { CacheableFavoritesService } from '../core/favorites/cacheable-favorites.service';
import { Favorite } from '../models/favorite';
import { AlertService } from '../core/alert/alert.service'; */


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
    private route: ActivatedRoute,
    private searchTermChangeService: SearchTermChangeService,
    private eventService: EventService) {
  }

  ngOnInit(): void {

    // listen to searchTermChangeService observable
    // to re-sort the viewable reports to match user search
    // from the `event-search` component (in nav-bar)
    this.listenForSearchTermChanges();

    // pull all reports from CacheableEventService
    // mash together the name, date, and other fields
    this.pullAndIndexReports();

    this.route.paramMap
      .pipe(first(), takeUntil(this.unsubscribe))
      .subscribe((paramMap) => {
        if (paramMap.has('term')) {
          this.currentSearchTerm = paramMap.get('term');
          this.searchCachedReportsByTerm(this.currentSearchTerm);
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
        this.currentSearchTerm = searchTerm;
        this.searchCachedReportsByTerm(this.currentSearchTerm);
      });
  }

  private searchCachedReportsByTerm(searchTerm: string): void {
    if (!searchTerm) {
      console.log('Search term invalid, skipping query');
      return;
    }

    this.loading = true;

    searchTerm = searchTerm.toLowerCase();

    // clear out matching reports
    this.events = [];
    this.eventMap.forEach((event, hash) => {
      if (hash.indexOf(searchTerm) > -1) {
        this.events.push(event);
      }
    });

    this.loading = false;
  }

  private pullAndIndexReports(): void {
    this.loading = true;

    this.eventService.getEvents()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((events) => {
        this.events = events;
        this.indexReports(this.events);
        if (this.currentSearchTerm) {
          this.searchCachedReportsByTerm(this.currentSearchTerm);
        }
        this.loading = false;
      }, (err) => {
        console.error(err);
        this.loading = false;
      });
  }

  private indexReports(events: Event[]): void {
    this.loading = true;
    const separator = '|';
    this.eventMap = new Map<string, Event>();
    [...events].map((event) => {
      const eventHash = [
        event.name,
        event.date,
        event.organizer,
        event.e_type,
        event.attendees.map((attendee) => attendee.toString()).join(separator)
      ].join(separator).toLowerCase();
      this.eventMap.set(eventHash, event);
    });
    this.loading = false;
  }
}
