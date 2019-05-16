import { Component, OnInit } from '@angular/core';
import { VehicleCategoryService } from 'src/app/_services/vehicleCategory.service';
import { Router } from '@angular/router';
import { VehicleCategory } from 'src/app/models/VehicleCategory';

@Component({
  selector: 'app-vehiclecategory-list',
  templateUrl: './vehiclecategory-list.component.html',
  styleUrls: ['./vehiclecategory-list.component.css']
})
export class VehiclecategoryListComponent implements OnInit {
  vehicleCategories: VehicleCategory[];

  constructor(private vehicleCategoryService: VehicleCategoryService, private router: Router) { }

  ngOnInit() {
    this.getVehicleCategories();
  }

  getVehicleCategories(): any {
    this.vehicleCategoryService.getVehicleCategories().subscribe(data => {
      this.vehicleCategories = data;
    });
  }

  editVehicleCategory(id: string) {
    this.router.navigate(['/editvehiclecategory', id]);
  }
}
