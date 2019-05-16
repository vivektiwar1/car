import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { VehicleCategory } from '../models/VehicleCategory';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehicleCategoryService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getVehicleCategories() {
    return this.http.get<VehicleCategory[]>(this.baseUrl + 'Definition/vehiclecategories');
  }

  getVehicleCategory(vehicleCategoryId: string) {
    return this.http.get<VehicleCategory>(this.baseUrl + 'Definition/GetVehicleCategory/' + vehicleCategoryId);
  }

  create(model: VehicleCategory) {
    return this.http.post(this.baseUrl + 'Definition/addVehicleCategory', model,
     {headers: new HttpHeaders().set('Content-Type', 'application/json')});
  }

  update(model: VehicleCategory) {
    return this.http.put(this.baseUrl + 'Definition/updateVehicleCategory', model,
     {headers: new HttpHeaders().set('Content-Type', 'application/json')});
  }
}
