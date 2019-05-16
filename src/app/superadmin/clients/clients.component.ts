import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/_services/clients.service';
import { Client } from 'src/app/models/Client';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NgForm } from '@angular/forms';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';



@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})

 

export class ClientsComponent implements OnInit {
  clients: Client[];
  client: Client;

  firstName: any[];
  lastName: any[];
  zip: any[];
  country: any[];
  private url = 'http://40.68.173.61/api/Definition/addClient';

  // onSubmit = function (client : Client) {
  //   console.log(client);

  //   var body = "id=" + client.id +"&firstname=" + client.firstname + "&lastname=" + client.lastname + "&country=" + client.country + "&zip=" + client.zip;
  //   this.http.post("http://40.68.173.61/api/Definition/addClient", body, ).subscribe((data) => {});

  // }

  constructor(private clientService: ClientsService, private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.getClients();
  }

  getClients(): any {
    this.clientService.getClients().subscribe(data => {
      this.clients = data;
      console.log(data);
    });
  }

  

  editClient(id: string) {
    this.router.navigate(['/createclient', id]);
  }

  onSubmit(form: NgForm){
    var data = form.value;
    var myPostObject = {
      id:data.id,
      firstName:data.firstName,
      lastName:data.lastName,
      zip:data.zip,
      country:data.country,
    }
    this.http.post(this.url, myPostObject)
      .subscribe(response => {
        debugger;
        console.log(response);
        alert("Data saved");
        
      },(err: HttpErrorResponse) => {
        console.log(err);
    });
    this.getClients();
  }

  getClient(id: string): any {
    this.clientService.getClient(id).subscribe(data => {
      this.client = data;
      console.log(data);
    });
  }


}
