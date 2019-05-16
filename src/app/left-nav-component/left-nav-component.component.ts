import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-left-nav-component",
  templateUrl: "./left-nav-component.component.html",
  styleUrls: ["./left-nav-component.component.css"]
})
export class LeftNavComponentComponent implements OnInit {
  expaned: boolean = false;
  constructor() {}

  ngOnInit() {}
  
  subMenuDefinition() {
    this.expaned = !this.expaned;
  }
}
