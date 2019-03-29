import { TestBed } from '@angular/core/testing';

import { InMemoryCacheService } from './in-memory-cache.service';

describe('InMemoryCacheService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InMemoryCacheService = TestBed.get(InMemoryCacheService);
    expect(service).toBeTruthy();
  });
});
