import { TestBed } from '@angular/core/testing';

import { TotalBreakoutService } from './total-breakout.service';

describe('TotalBreakoutService', () => {
  let service: TotalBreakoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TotalBreakoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
