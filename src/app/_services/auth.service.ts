import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../models/User';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthUser } from '../models/AuthUser';
import { environment } from '../../environments/environment';
import { Employee } from '../models/Employee';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = environment.apiUrl;
  userToken: any;
  decodedToken: any;
  currentUser: User;
  private photoUrl = new BehaviorSubject<string>('../../assets/user.png');
  currentPhotoUrl = this.photoUrl.asObservable();
  constructor(private http: HttpClient, private jwtHelperService: JwtHelperService) { }

    changeMemberPhoto(photoUrl: string) {
      this.photoUrl.next(photoUrl);
    }

    login(model: any) {
      return this.http.post<AuthUser>(this.baseUrl + 'account/login', model,  {headers: new HttpHeaders()
        .set('Content-Type', 'application/json')})
        .map(user => {
        if (user) {
          localStorage.setItem('token', user.accessToken);
          localStorage.setItem('refreshToken', user.refreshToken);
          localStorage.setItem('user', JSON.stringify(user.user));
          this.decodedToken = this.jwtHelperService.decodeToken(user.accessToken);
          this.currentUser = user.user;
          this.userToken = user.accessToken;
          if (this.currentUser.photoUrl !== null) {
            this.changeMemberPhoto(this.currentUser.photoUrl);
          } else {
            this.changeMemberPhoto('../../assets/user.png');
          }
        }
      });
    }

  register(user: User) {
    const _formData = new FormData();
    _formData.append('Logo', user.logo);
    _formData.append('FirstName', user.name);
    _formData.append('LastName', user.lastName);
    _formData.append('UserName', user.userName);
    _formData.append('Email', user.email);
    _formData.append('Address', user.Address);
    _formData.append('Phone', user.phone);
    _formData.append('CompanyName', user.companyName);
    _formData.append('Password', user.password);
    _formData.append('CompanyEmail', user.companyEmail);
    _formData.append('CompanyPhone', user.companyPhone);
    _formData.append('CompanyAddress', user.companyAddress);
    _formData.append('PostalCode', user.postalCode);
    _formData.append('Country', user.country);
    _formData.append('City', user.city);
    _formData.append('Password', user.password);
    _formData.append('DOB', user.dOB.toLocaleString());
    return this.http.post(this.baseUrl + 'account/register', _formData);
  }

  update(model: any) {
    return this.http.post(this.baseUrl + 'account/UpdateUserProfile', model,
     {headers: new HttpHeaders().set('Content-Type', 'application/json')});
  }

  updatePassword(model: any) {
    return this.http.post<boolean>(this.baseUrl + 'account/UpdateUserPassword', model,
     {headers: new HttpHeaders().set('Content-Type', 'application/json')});
  }

  loggedIn() {
    const token = this.jwtHelperService.tokenGetter();
    if (!token) {
      return false;
    }

    return !this.jwtHelperService.isTokenExpired(token);
  }

  getUserLanguage() {
    const token = this.jwtHelperService.tokenGetter();
    if (!token) {
      return 'en';
    }
    return this.decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/locality'];
  }

  registerEmployee(user) {
    return this.http.post(this.baseUrl + 'Employee/', user);
  }

  getEmployees(): Observable<User[]>{
    return this.http.get<User[]>(this.baseUrl + 'Employee');
  }

  getEmployee(id: string): Observable<Employee> {
    return this.http.get<Employee>(this.baseUrl + 'Employee/' + id);
  }

  updateEmployee(item){
    return this.http.put(this.baseUrl + 'Employee', item);
  }

  deleteEmploee(id){
    return this.http.delete(this.baseUrl + 'Employee/' + id);
  }
}
