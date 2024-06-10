import { TestBed } from '@angular/core/testing';

import { HomePositivenoteService } from './home-positivenote.service';

describe('HomePositivenoteService', () => {
  let service: HomePositivenoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomePositivenoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
