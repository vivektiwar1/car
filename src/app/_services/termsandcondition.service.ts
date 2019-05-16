import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TermsAndCondition } from '../models/TermsAndCondition';
import { ObserveOnSubscriber } from 'rxjs/internal/operators/observeOn';

@Injectable({
  providedIn: 'root'
})
export class TermsandconditionService {
baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) {  }

  create(item) {
    return this.http.post(this.baseUrl + 'Definition/termsandcondtions', item);
  }

  getTermsAndConditions(): Observable<TermsAndCondition[]> {
    return this.http.get<TermsAndCondition[]>(this.baseUrl + 'Definition/termsandcondtions');
  }

  getById(id): Observable<TermsAndCondition> {
    return this.http.get<TermsAndCondition>(this.baseUrl + 'Definition/termsandcondtions/' + id);
  }

  update(termsandcondtion) {
    return this.http.put(this.baseUrl + 'Definition/termsandcondtions', termsandcondtion);
  }

  delete(id): Observable<{}> {
    return this.http.delete(this.baseUrl + 'Definition/termsandcondtions/' + id);
  }

  getFormData(): Observable<TermsAndCondition> {
    return this.http.get<TermsAndCondition>(this.baseUrl + 'Definition/termsandcondtions/getformdata');
  }

  gerTermsByCountry(countryId): Observable<TermsAndCondition[]> {
    return this.http.get<TermsAndCondition[]>(this.baseUrl + 'Definition/termsandcondtions/getbycountryid/' + countryId);
  }
}
