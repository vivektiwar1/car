/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CurrencysymbolService } from './currencysymbol.service';

describe('Service: Currencysymbol', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrencysymbolService]
    });
  });

  it('should ...', inject([CurrencysymbolService], (service: CurrencysymbolService) => {
    expect(service).toBeTruthy();
  }));
});
