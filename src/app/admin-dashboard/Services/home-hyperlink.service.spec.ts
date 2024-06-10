import { TestBed } from '@angular/core/testing';

import { HomeHyperlinkService } from './home-hyperlink.service';

describe('HomeHyperlinkService', () => {
  let service: HomeHyperlinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeHyperlinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
