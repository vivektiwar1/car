import { Component, OnInit } from '@angular/core';
import { VehicleCategory } from 'src/app/models/VehicleCategory';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { VehicleCategoryService } from 'src/app/_services/vehicleCategory.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-category-add-edit',
  templateUrl: './vehicle-category-add-edit.component.html',
  styleUrls: ['./vehicle-category-add-edit.component.css']
})
export class VehicleCategoryAddEditComponent implements OnInit {

  vehicleCategory: VehicleCategory;
  vehicleCategoryForm: FormGroup;

  constructor(
    private vehicleCategoryService: VehicleCategoryService,
    private alertify: AlertifyService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    this.vehicleCategoryForm = this.fb.group(
      {
        id: ['', Validators.required],
        name: ['', Validators.required],
        description: ['', Validators.required],
        isDeleted: [false, Validators.required]
      });

    this._route.paramMap.subscribe(param => {
      const id = param.get('id');
      if (id.toString() === '0') {
        this.createAddForm();
      } else {
        this.createEditForm(id.toString());
      }
    });
  }

  createAddForm() {
    this.vehicleCategoryForm = this.fb.group(
      {
        name: ['', Validators.required],
        description: [''],
        isDeleted: [false]
      }
    );
  }

  createEditForm(id: string) {
    this.vehicleCategoryService.getVehicleCategory(id).subscribe((data: VehicleCategory ) => {
      this.vehicleCategoryForm = this.fb.group(
          {
            id: [data.id, Validators.required],
            name: [data.name, Validators.required],
            description: [data.description],
            isDeleted: [data.isDeleted]
          });
      });
    }

    create() {
      if (this.vehicleCategoryForm.valid) {
        this.vehicleCategory = Object.assign({}, this.vehicleCategoryForm.value);
        if(this.vehicleCategory.id) {
          this.editVehicleCategory();
        } else {
          this.createNewVehicleCategory();
        }
      }
    }

    createNewVehicleCategory() {
      this.vehicleCategoryService.create(this.vehicleCategory).subscribe(() => {
        this.alertify.success('Vehicle Category created successfully');
        this.router.navigate(['/vehiclecategories']);
      }, error => {
        this.alertify.error(error);
      });
    }

    editVehicleCategory() {
      this.vehicleCategoryService.update(this.vehicleCategory).subscribe(() => {
        this.alertify.success('Vehicle Category updated successfully');
        this.router.navigate(['/vehiclecategories']);
      }, error => {
        this.alertify.error(error);
      });
    }

}
