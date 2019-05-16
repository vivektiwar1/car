/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PackageplanService } from './packageplan.service';

describe('Service: Packageplan', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PackageplanService]
    });
  });

  it('should ...', inject([PackageplanService], (service: PackageplanService) => {
    expect(service).toBeTruthy();
  }));
});
