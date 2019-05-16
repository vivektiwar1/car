import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../../_services/clients.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertifyService } from '../../../_services/alertify.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Client } from '../../../models/Client';

@Component({
  selector: 'app-createclient',
  templateUrl: './createclient.component.html',
  styleUrls: ['./createclient.component.css']
})
export class CreateclientComponent implements OnInit {
  clientForm: FormGroup;
  client: Client;
  addBtn: boolean;
  constructor(private clientsService: ClientsService, private router: Router, private route: ActivatedRoute,
    private alertify: AlertifyService, private fb: FormBuilder) { }

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      this.addBtn = true;
      const id = param.get('id');
      this.clientForm = this.fb.group({
        id: [''],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        country:  ['', Validators.required],
        zip: ['', Validators.required]

      });
      if (id.toString() !== '0') {
        this.addBtn = false;
        this.clientsService.getClient(id).subscribe(data => {
          this.clientForm.setValue({
            id: data.id,
            firstName: data.firstname,
            lastName: data.lastname,
            country: data.country,
            zip: data.zip
          });
        });
      }
    });
  }
  onSubmit() {

    this.client = Object.assign({}, this.clientForm.value);
    if (this.client.id === '') {
      this.client.id = '00000000-0000-0000-0000-000000000000';
      this.clientsService.create(this.client).subscribe(() => {
        this.alertify.success('Created successfully');
        this.router.navigate(['/superadmin/clients']);
      }, error => {
        this.alertify.error(error);
      });
    } else {
      this.clientsService.update(this.client).subscribe(() => {
        this.router.navigate(['/superadmin/clients']);
      }, error => {
        this.alertify.error(error);
      });
    }
  }

}
