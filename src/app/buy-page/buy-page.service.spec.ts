import { TestBed } from '@angular/core/testing';

import { BuyPageService } from './buy-page.service';

describe('BuyPageService', () => {
  let service: BuyPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuyPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
