import { Component, OnInit } from '@angular/core';
import { VehicletypeService } from '../../_services/vehicletype.service';
import { Router } from '@angular/router';
import { VehicleType } from '../../models/VehicleType';
import { AlertifyService } from '../../_services/alertify.service';

@Component({
  selector: 'app-vehiclecategory',
  templateUrl: './vehiclecategory.component.html',
  styleUrls: ['./vehiclecategory.component.css']
})
export class VehiclecategoryComponent implements OnInit {
  vehicleTypes: VehicleType[];
  constructor(private vehicleTypeService: VehicletypeService, private router: Router, private alertify: AlertifyService) { }

  ngOnInit() {
    this.getVehicleTypes();
  }

  getVehicleTypes() {
    this.vehicleTypeService.getVehicleTypes().subscribe((_vehicleTypes: VehicleType[]) => {
      this.vehicleTypes = _vehicleTypes;
    }, error => {
      this.alertify.error(error);
    });
  }

  editVehicleType(id: string){
    this.router.navigate(['/editvehicletype', id]);
  }
}
