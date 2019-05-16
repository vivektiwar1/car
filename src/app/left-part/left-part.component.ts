import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-part',
  templateUrl: './left-part.component.html',
  styleUrls: ['./left-part.component.scss']
})
export class LeftPartComponent implements OnInit {
  status: string = '';
 

  constructor() { }

  ngOnInit() {
  }

  clickEvent(status){
    this.status = status;
}
}
