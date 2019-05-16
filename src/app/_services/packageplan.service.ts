import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { PackagePlan } from '../models/PackagePlan';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})

export class PackageplanService {

  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) {  }

  createPackage(packagePlan): Observable<PackagePlan> {
    return this.http.post<PackagePlan>(this.baseUrl + 'packageplan', packagePlan);
  }

  getPackages(): Observable<PackagePlan[]>{
    return this.http.get<PackagePlan[]>(this.baseUrl + 'packageplan');
  }

  getPackage(id): Observable<PackagePlan> {
    return this.http.get<PackagePlan>(this.baseUrl + 'packageplan/' + id);
  }

  updatePackate(packagePlan) {
    return this.http.put(this.baseUrl + 'packageplan', packagePlan);
  }

  deleteObj(id): Observable<{}> {
    return this.http.delete(this.baseUrl + 'packageplan/' + id);
  }

}
