import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
baseUrl = environment.apiUrl;

constructor(private authHttp: HttpClient) { }

getUsers(pageNumber: number, pageSize: number) {
   return this.authHttp
   .get<User[]>(this.baseUrl + 'Account/GetUsers');
 }
 
 getUser(id:string) {
  return this.authHttp
  .get<User>(this.baseUrl + 'Account/'+id);
}


// sendLike(id: number, recipientId: number) {

//   return this.authHttp.post(this.baseUrl + 'users/' + id +  '/like/' + recipientId, {});
// }

// getUser(id): Observable<User> {
//   return this.authHttp
//     .get<User>(this.baseUrl + 'Account/' + id);
// }

// updateUser(id: number, user: User) {
//   return this.authHttp.put(this.baseUrl + 'users/' + id, user);
// }

// setMainPhoto(userId: number, id: number) {
//   return this.authHttp.post(this.baseUrl + 'users/' + userId + '/photos/' + id + '/setMain', {});
// }

// deletePhoto (userId: number, id: number) {
//   return this.authHttp.delete(this.baseUrl + 'users/' + userId + '/photos/' + id);
// }

// getMessages(id: number, page?, itemsPerPage?, messageContainer?: string) {
//   const paginatedResult: PaginatedResult<Message[]> = new PaginatedResult<Message[]>();

//   let params = new HttpParams();
//   params = params.append('MessageContainer', messageContainer);

//   if (page != null && itemsPerPage != null) {
//     params = params.append('pageNumber', page);
//     params = params.append('pageSize', itemsPerPage);
//   }

//   return this.authHttp.get<Message[]>(this.baseUrl + 'users/' + id + '/messages' ,
//   {observe: 'response', params})
//     .map(response => {
//       paginatedResult.result = response.body;
//       if (response.headers.get('Pagination') != null) {
//         paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
//       }

//       return paginatedResult;
//   });
// }

// sendMessage(id: number, message: Message) {
//   return this.authHttp.post<Message>(this.baseUrl + 'users/' + id + '/messages', message);
// }

// deleteMessage(id: number, userId: number) {
//   return this.authHttp.post(this.baseUrl + 'users/' + userId + '/messages/' + id, {});
// }

// markAsRead(userId: number, messageId: number) {
//   return this.authHttp.post(this.baseUrl + 'users/' + userId + '/messages/' + messageId + '/read', {});
// }

// getMessageThread(id: number, recipientId: number) {
//   return this.authHttp.get<Message[]>(this.baseUrl + 'users/' + id + '/messages/thread/' + recipientId);
// }

// saveUser (model: any) {
//   return this.authHttp.post<User>(this.baseUrl + 'Account/SaveUser' ,  model,
//   {headers: new HttpHeaders().set('Content-Type', 'application/json')});
// }
}
