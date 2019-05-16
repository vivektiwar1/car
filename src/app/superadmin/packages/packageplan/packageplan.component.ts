import { Component, OnInit } from '@angular/core';
import { PackagePlan } from '../../../models/PackagePlan';
import { PackageplanService } from '../../../_services/packageplan.service';
import { Router } from '@angular/router';
import { AlertifyService } from '../../../_services/alertify.service';

@Component({
  selector: 'app-packageplan',
  templateUrl: './packageplan.component.html',
  styleUrls: ['./packageplan.component.css']
})
export class PackageplanComponent implements OnInit {

  packages: PackagePlan[];


  constructor(private packageService: PackageplanService, private router: Router, private alertify: AlertifyService) { }

  ngOnInit() {
    this.getPackages();
  }


  getPackages() {
    this.packageService.getPackages().subscribe((packages: PackagePlan[]) => { this.packages = packages; },
    error => {
      this.alertify.error(error);
    });
  }

  editPackage(id: string) {
    this.router.navigate(['/editpackage', id]); //
  }

  deletePackage(id: string) {
    this.packageService.deleteObj(id).subscribe(() => {
      this.getPackages();
    }, error => {
      this.alertify.error(error);
    });
  }
}
