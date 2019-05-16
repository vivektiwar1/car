import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { AuthService } from './../_services/auth.service';
import { Router } from "@angular/router";

@Component({
  selector: "app-main-nav-bar-component",
  templateUrl: "./main-nav-bar-component.component.html",
  styleUrls: ["./main-nav-bar-component.component.css"]
})
export class MainNavBarComponentComponent implements OnInit {
  constructor(public translate: TranslateService, public authService:AuthService, private router:Router) {}

  ngOnInit() {}
  clickEvent() {
    // //ToDo: This could be done better, but for the beginning it is enough - arlindi
    // let element = document.getElementById("mySidebar");
    // let eleContent = document.getElementById("SideBarContent");
    // if (element.style.width == "0px" || element.style.width == "") {
    //   element.style.width = "250px";
    //   setTimeout(function() {
    //     eleContent.style.opacity = "1";
    //   }, 300);
    // } else {
    //   //Reset
    //   element.style.width = "0px";
    //   eleContent.style.opacity = "0";
    // }
  }

  
  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("refreshToken");
    this.authService.decodedToken = null;
    this.authService.currentUser = null; 
    this.router.navigate(["/home"]);
  }
}
