import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Client } from '../models/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getClients() {
    return this.http.get<Client[]>(this.baseUrl + 'Definition/clients');
  }

  getProtocols() {
    return this.http.get<any[]>(this.baseUrl + 'Definition/protocols');
  }

  getClient(clientId: string) {
    return this.http.get<Client>(this.baseUrl + 'Definition/client/' + clientId);
  }

  create(model: Client) {
    return this.http.post(this.baseUrl + 'Definition/addClient', model,
     {headers: new HttpHeaders().set('Content-Type', 'application/json')});
  }

  update(model: Client) {
    return this.http.put(this.baseUrl + 'client/updateClient', model,
     {headers: new HttpHeaders().set('Content-Type', 'application/json')});
  }
}
