import { Component } from '@angular/core';
import { AuthService } from './_services/auth.service';
import { User } from './models/User';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor ( public authService: AuthService, private jwtHelperService: JwtHelperService, private translate: TranslateService) { }

 // tslint:disable-next-line:use-life-cycle-interface
 ngOnInit() {
  const token = localStorage.getItem('token');
  const user: User = JSON.parse(localStorage.getItem('user'));
  if (token) {
    this.authService.decodedToken = this.jwtHelperService.decodeToken(token);
  }

  if (user) {
    this.authService.currentUser = user;
    if (this.authService.currentUser.photoUrl !== null ) {
      this.authService.changeMemberPhoto(user.photoUrl);
    } else {
      this.authService.changeMemberPhoto('../assets/user.png');
    }
  }

  this.translate.setDefaultLang('en');
  this.translate.use(this.authService.getUserLanguage());
  this.translate.addLangs(['en', 'de']);

  // console.log(this.authService.loggedIn());
  // console.log(this.authService.decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/locality']);
 }
}
