import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Country } from '../models/Country';
import { City } from '../models/City';

@Injectable({
  providedIn: 'root' 
})

export class CountryService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getCountries() {
    return this.http.get<Country[]>(this.baseUrl + 'Definition/countries');
  }

  getCountriesSuperAdmin() {
    return this.http.get<Country[]>(this.baseUrl + 'Definition/countriesSuperAdmin');
  }

  getCitiesByCountryId(countryId: string): any {
    return this.http.get<City[]>(this.baseUrl + 'Definition/GetCitiesByCountryId/' + countryId);
  }

  getCountryDataForAddForm() {
    return this.http.get<Country>(this.baseUrl + 'Definition/countryaddupdateData');
  }

  getCountry(countryId: string) {
    return this.http.get<Country>(this.baseUrl + 'Definition/GetCountry/' + countryId);
  }

  create(model: Country) {
    return this.http.post(this.baseUrl + 'Definition/addCountry', model,
     {headers: new HttpHeaders().set('Content-Type', 'application/json')});
  }

  update(model: Country) {
    return this.http.put(this.baseUrl + 'Definition/updateCountry', model,
     {headers: new HttpHeaders().set('Content-Type', 'application/json')});
  }
}





