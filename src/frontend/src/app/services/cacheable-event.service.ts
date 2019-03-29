import { Injectable, Inject } from '@angular/core';

import { Observable } from 'rxjs';

import { Event } from '../models/event'
import { REPORTS_CACHE_PROVIDER } from './cacheable-events.config';
import { InMemoryCacheService } from './in-memory-cache.service';
import { EventService } from './event-service.service'

@Injectable()
export class CacheableEventService {
  private readonly eventCacheDuration = 900000;

  constructor(
    @Inject(REPORTS_CACHE_PROVIDER) private inMemoryCacheService: InMemoryCacheService,
    private eventService: EventService) {
  }

  get(): Observable<Event[]> {
    return this.inMemoryCacheService.get(`get`, () => this.eventService.getEvents(), this.eventCacheDuration);
  }

  search(searchTerm: string): Observable<Event[]> {
    return this.inMemoryCacheService.get(`search(${searchTerm})`, () => this.eventService.search(searchTerm), 2000);
  }
}
