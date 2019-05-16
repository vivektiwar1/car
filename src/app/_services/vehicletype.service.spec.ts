/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VehicletypeService } from './vehicletype.service';

describe('Service: Vehicletype', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VehicletypeService]
    });
  });

  it('should ...', inject([VehicletypeService], (service: VehicletypeService) => {
    expect(service).toBeTruthy();
  }));
});
