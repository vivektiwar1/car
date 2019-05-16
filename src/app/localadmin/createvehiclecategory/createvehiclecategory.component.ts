import { Component, OnInit } from '@angular/core';
import { VehicleType } from '../../models/VehicleType';
import { VehicletypeService } from '../../_services/vehicletype.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertifyService } from '../../_services/alertify.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-createvehiclecategory',
  templateUrl: './createvehiclecategory.component.html',
  styleUrls: ['./createvehiclecategory.component.css']
})
export class CreatevehiclecategoryComponent implements OnInit {
  vehicleType: VehicleType;
  companies: any[];
  vehicleTypeForm: FormGroup;
  addBtn: boolean;
  constructor(private vehicleTypeService: VehicletypeService, private alertify: AlertifyService,
    private route: ActivatedRoute, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    // dummydata
    this.companies = [{id: 1, name: 'Company1'}, {id: 1, name: 'Company2'}];
    this.route.paramMap.subscribe(param => {
      const id = param.get('id');
      this.addBtn = true;
      this.vehicleTypeForm = this.fb.group({
        id: [''],
        name: ['', Validators.required],
        companyId: ['', Validators.required ],
        description: ['']
      });
      if (id.toString() !== '0') {
        this.addBtn = false;
        this.vehicleTypeService.getById(id).subscribe(data => {
          this.vehicleTypeForm.setValue({
            id: data.id,
            name: data.name,
            companyId: data.companyId,
            description: data.description
          });
        }, error => {
          this.alertify.error('Could not retrieve data');
        });
      }
    });
  }

  onSubmit() {
    this.vehicleType = Object.assign({}, this.vehicleTypeForm.value);
    if (this.vehicleType.id === '') {
      this.vehicleType.id = '00000000-0000-0000-0000-000000000000';
      this.vehicleType.companyId = null;
      this.vehicleTypeService.create(this.vehicleType).subscribe(() => {
        this.alertify.success('Created successfully');
        this.router.navigate(['/vehicletypes']);
      }, error => {
        console.log(error);
        this.alertify.error(error);
      });
    } else {
      this.vehicleTypeService.update(this.vehicleType).subscribe(() => {
        this.router.navigate(['/vehicletypes']);
      }, error => {
        this.alertify.error(error);
      });
    }
  }



}
