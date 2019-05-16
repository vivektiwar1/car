import { Injectable } from '@angular/core';
import { CurrencySymbol } from '../models/CurrencySymbol';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencysymbolService {
baseUrl = environment.apiUrl;
constructor(private http: HttpClient) { }

  getCurrencySymbols(): Observable<CurrencySymbol[]>{
    return this.http.get<CurrencySymbol[]>(this.baseUrl + 'Definition/getCurrencySymbols');
  }

  getCurrencySymbol(id): Observable<CurrencySymbol> {
    return this.http.get<CurrencySymbol>(this.baseUrl + 'Definition/getCurrencySymbol/' + id);
  }

  create(language): Observable<CurrencySymbol> {
    return this.http.post<CurrencySymbol>(this.baseUrl + 'Definition/addCurrencySymbol', language);
  }

  update(language) {
    return this.http.put(this.baseUrl + 'Definition/updateCurrencySymbol', language);
  }

  delete(id) {
    return this.http.delete(this.baseUrl + 'Definition/deleteCurrencySymbol/' + id);
  }
}
