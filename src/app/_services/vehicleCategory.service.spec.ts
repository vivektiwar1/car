/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VehicleCategoryService } from './vehicleCategory.service';

describe('Service: VehicleCategory', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VehicleCategoryService]
    });
  });

  it('should ...', inject([VehicleCategoryService], (service: VehicleCategoryService) => {
    expect(service).toBeTruthy();
  }));
});
