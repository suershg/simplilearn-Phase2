import { TestBed } from '@angular/core/testing';

import { ItemDescService } from './item-desc.service';

describe('ItemDescService', () => {
  let service: ItemDescService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemDescService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
