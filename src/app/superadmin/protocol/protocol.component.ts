import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/_services/clients.service';

@Component({
  selector: 'app-protocol',
  templateUrl: './protocol.component.html',
  styleUrls: ['./protocol.component.css']
})
export class ProtocolComponent implements OnInit {

  protocols: any;
  constructor(private clientService: ClientsService) { }

  ngOnInit() {
    this.clientService.getProtocols().subscribe(data => {
      this.protocols = data;
      console.log(data);
    });
  }

}
