import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { ExtraModule } from '../models/extramodule';

@Injectable({
  providedIn: 'root'
})
export class ExtramoduleService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  create(extramodule): Observable<ExtraModule> {
    return this.http.post<ExtraModule>(this.baseUrl + 'Definition/addExtraModule', extramodule );
  }

  getExtraModules(): Observable<ExtraModule[]>{
    return this.http.get<ExtraModule[]>(this.baseUrl + 'Definition/ExtraModules');
  }

  getExtraModule(id): Observable<ExtraModule> {
    return this.http.get<ExtraModule>(this.baseUrl + 'Definition/GetExtraModule/' + id);
  }

  update(extramodule) {
    return this.http.put(this.baseUrl + 'Definition/updateExtraModule', extramodule);
  }

  delete(id): Observable<{}> {
    return this.http.delete(this.baseUrl + 'Definition/deletextraModule/' + id);
  }
}
