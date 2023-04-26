import { TestBed } from '@angular/core/testing';

import { FoodInfoService } from './FoodInfo.service';

describe('ProductService', () => {
  let service: FoodInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
