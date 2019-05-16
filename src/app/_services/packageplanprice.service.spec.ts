/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PackageplanpriceService } from './packageplanprice.service';

describe('Service: Packageplanprice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PackageplanpriceService]
    });
  });

  it('should ...', inject([PackageplanpriceService], (service: PackageplanpriceService) => {
    expect(service).toBeTruthy();
  }));
});
