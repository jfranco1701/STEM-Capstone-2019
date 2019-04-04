import { TestBed } from '@angular/core/testing';

import { SearchTermChangeService } from './search-term-change.service';

describe('SearchTermChangeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchTermChangeService = TestBed.get(SearchTermChangeService);
    expect(service).toBeTruthy();
  });
});
