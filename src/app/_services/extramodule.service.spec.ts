/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ExtramoduleService } from './extramodule.service';

describe('Service: Extramodule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExtramoduleService]
    });
  });

  it('should ...', inject([ExtramoduleService], (service: ExtramoduleService) => {
    expect(service).toBeTruthy();
  }));
});
