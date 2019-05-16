import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExtraModulePrice } from '../models/ExtraModulePrice';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExtramodulepriceService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  create(extramoduleprice): Observable<ExtraModulePrice> {
    return this.http.post<ExtraModulePrice>(this.baseUrl + 'Definition/extraModulePrice', extramoduleprice);
  }

  getExtraModulePrices(): Observable<ExtraModulePrice[]>{
    return this.http.get<ExtraModulePrice[]>(this.baseUrl + 'Definition/extraModulePrice');
  }

  getExtraModulePrice(id): Observable<ExtraModulePrice> {
    return this.http.get<ExtraModulePrice>(this.baseUrl + 'Definition/extraModulePrice/' + id);
  }

  update(extramoduleprice) {
    return this.http.put(this.baseUrl + 'Definition/extraModulePrice', extramoduleprice);
  }

  delete(id): Observable<{}> {
    return this.http.delete(this.baseUrl + 'Definition/extraModulePrice/' + id);
  }

  getDataForForm(): Observable<ExtraModulePrice> {
    return this.http.get<ExtraModulePrice>(this.baseUrl + 'Definition/extraModulePrice/getformdata/');
  }

  getByExtraModule(moduleId): Observable<ExtraModulePrice[]> {
    return this.http.get<ExtraModulePrice[]>(this.baseUrl + 'Definition/extraModulePriceByModule/' + moduleId);
  }
}
