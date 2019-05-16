import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VehicleType } from '../models/VehicleType';

@Injectable({
  providedIn: 'root'
})
export class VehicletypeService {

  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) {  }

  create(item: VehicleType){
    return this.http.post(this.baseUrl + 'Definition/addVehicletype', item,
    {headers: new HttpHeaders().set('Content-Type', 'application/json')});
  }

  getVehicleTypes(): Observable<VehicleType[]> {
    return this.http.get<VehicleType[]>(this.baseUrl + 'Definition/vehicletype');
  }

  getById(id): Observable<VehicleType> {
    return this.http.get<VehicleType>(this.baseUrl + 'Definition/vehicletype/' + id);
  }

  update(item) {
    return this.http.put(this.baseUrl + 'Definition/vehicletype', item);
  }

  delete(id): Observable<{}> {
    return this.http.delete(this.baseUrl + 'Definition/vehicletype/' + id);
  }

  //getFormData(): Observable<VehicleType> {
    //return this.http.get<VehicleType>(this.baseUrl + 'Definition/vehicletype/');
 // }

}
