import { TestBed } from '@angular/core/testing';

import { CacheableEventService } from './cacheable-event.service';

describe('CacheableEventService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CacheableEventService = TestBed.get(CacheableEventService);
    expect(service).toBeTruthy();
  });
});
