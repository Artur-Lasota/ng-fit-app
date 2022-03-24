/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserDailyProductService } from './user-daily-product.service';

describe('Service: UserDailyProduct', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserDailyProductService]
    });
  });

  it('should ...', inject([UserDailyProductService], (service: UserDailyProductService) => {
    expect(service).toBeTruthy();
  }));
});
