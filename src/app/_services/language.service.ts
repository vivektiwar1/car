import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Language } from '../models/Language';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
baseUrl = environment.apiUrl;



constructor(private http: HttpClient) { }


  getLanguages(): Observable<Language[]> {
    return this.http.get<Language[]>(this.baseUrl + 'Definition/language');
  }

  getLanguage(id): Observable<Language> {
    return this.http.get<Language>(this.baseUrl + 'Definition/language/' + id);
  }

  create(language): Observable<Language> {
    return this.http.post<Language>(this.baseUrl + 'Definition/language', language);
  }

  update(language) {
    return this.http.put(this.baseUrl + 'Definition/language', language);
  }

  delete(id) {
    return this.http.delete(this.baseUrl + 'Definition/language/' + id);
  }

}
