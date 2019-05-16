import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { PackagePlanPrice } from "../models/PackagePlanPrice";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PackageplanpriceService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAll(): Observable<PackagePlanPrice[]> {
    return this.http.get<PackagePlanPrice[]>(this.baseUrl + "packageplanprice");
  }

  getAllByPackagePlan(packagePlanId: string): Observable<PackagePlanPrice[]> {
    return this.http.get<PackagePlanPrice[]>(
      this.baseUrl + "packageplanprice/GetAllByPackagePlan/" + packagePlanId
    );
  }

  getById(id): Observable<PackagePlanPrice> {
    return this.http.get<PackagePlanPrice>(
      this.baseUrl + "packageplanprice/" + id
    );
  }

  create(model) {
    return this.http.post(this.baseUrl + "packageplanprice/", model, {
      headers: new HttpHeaders().set("Content-Type", "application/json")
    });
  }

  update(model) {
    return this.http.put(this.baseUrl + "packageplanprice", model);
  }

  getDataForForm(): Observable<PackagePlanPrice> {
    return this.http.get<PackagePlanPrice>(
      this.baseUrl + "packageplanprice/getformdata"
    );
  }
}
