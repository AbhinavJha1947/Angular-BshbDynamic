import { TestBed } from '@angular/core/testing';

import { HomeNewschemeService } from './home-newscheme.service';

describe('HomeNewschemeService', () => {
  let service: HomeNewschemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeNewschemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
