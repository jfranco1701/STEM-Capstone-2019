import { InjectionToken } from '@angular/core';
import { InMemoryCacheService } from './in-memory-cache.service';

/*
  This InMemoryCacheService is ONLY provided to any { provide: InMemoryCacheService, useValue: ANNOUNCEMENT_CACHE_PROVIDER }
  consumer.
*/
export const REPORTS_CACHE_PROVIDER = new InjectionToken<InMemoryCacheService>('InMemoryCacheService');
