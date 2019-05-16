import { Component, OnInit } from '@angular/core';
import { PackageplanService } from '../../../_services/packageplan.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PackagePlan } from '../../../models/PackagePlan';
import { AlertifyService } from '../../../_services/alertify.service';

@Component({
  selector: 'app-createpackage',
  templateUrl: './createpackage.component.html',
  styleUrls: ['./createpackage.component.css']
})
export class CreatepackageComponent implements OnInit {


  // tslint:disable-next-line:max-line-length
  constructor(private packageService: PackageplanService, private alertify: AlertifyService, private fb: FormBuilder, private router: Router, private _route: ActivatedRoute) { }

  packageForm: FormGroup;
  packageObj: PackagePlan;
  addBtn: boolean;

  ngOnInit() {
    this._route.paramMap.subscribe(param => {
      this.addBtn = true;
      const id = param.get('id');
      this.packageForm = this.fb.group({
        id: [''],
        name: ['', Validators.required],
        description: [''],
        isDeleted: [false]
      });
      if(id.toString() !== '0') {
        this.packageService.getPackage(id.toString()).subscribe((data: PackagePlan ) => {
          this.addBtn = false;
          this.packageForm.
          setValue
          ({  id: data.id,
              name: data.name,
              description: data.description,
              isDeleted: data.isDeleted
          });
        });
      }
    });
  }


  onSubmit() {
    this.packageObj = Object.assign({}, this.packageForm.value);
    if (this.packageObj.id.toString() === '') {
      this.packageObj.id = '00000000-0000-0000-0000-000000000000';
      this.packageService.createPackage(this.packageObj).subscribe(() => {
        this.router.navigate(['/packages']);
      }, error => {
        this.alertify.error(error);
      });
    }   else {
        this.packageService.updatePackate(this.packageObj).subscribe(() => {
          this.router.navigate(['/packages']);
        });
    }
  }

}
