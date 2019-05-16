import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
 
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  photoUrl: string;
  notifications: Notification[] = [];
  notifCounter: number;
  newNotification: boolean;
  constructor(private route:Router,public authService: AuthService, private router: Router) { }

  ngOnInit() { 
    this.notifCounter = 11;
    this.authService.currentPhotoUrl.subscribe(photoUrl => this.photoUrl = photoUrl);
  }
    


  login() {
    this.authService.login(this.model).subscribe(data => { 

      if (this.authService.loggedIn()) {
        // this.loadNotifications();
       }
    },
      error => {
        this.router.navigate(['/login']);
      } 
    );
  }

  logout() {
    this.authService.userToken = null;
    localStorage.removeItem('token');
    localStorage.removeItem('user'); 
    this.router.navigate(['/login']);
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

}
