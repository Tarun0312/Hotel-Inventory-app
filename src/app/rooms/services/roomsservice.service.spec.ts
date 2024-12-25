import { TestBed } from '@angular/core/testing';

import { RoomsserviceService } from './roomsservice.service';

describe('RoomsserviceService', () => {
  let service: RoomsserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoomsserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
