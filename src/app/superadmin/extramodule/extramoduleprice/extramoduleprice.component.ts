import { Component, OnInit } from '@angular/core';
import { ExtramodulepriceService } from '../../../_services/extramoduleprice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertifyService } from '../../../_services/alertify.service';
import { ExtraModulePrice } from '../../../models/ExtraModulePrice';

@Component({
  selector: 'app-extramoduleprice',
  templateUrl: './extramoduleprice.component.html',
  styleUrls: ['./extramoduleprice.component.css']
})
export class ExtramodulepriceComponent implements OnInit {
  extraModulePrices: ExtraModulePrice[];
  extramoduleid: string;
  constructor(private extraModulePriceService: ExtramodulepriceService, private router: Router, private route: ActivatedRoute,
     private alertify: AlertifyService) { }

  ngOnInit() {
    const params: any = this.route.snapshot.params;
    this.extramoduleid = params.id.toString();
    this.getByModule(this.extramoduleid);
  }

  /* getExtraModulePrices() {
    this.extraModulePriceService.getExtraModulePrices().subscribe((extraModulePrices: ExtraModulePrice[]) => {
      this.extraModulePrices = extraModulePrices;
    }, error => {
      this.alertify.error(error);
    });
  } */

  getByModule(moduleId){
    this.extraModulePriceService.getByExtraModule(moduleId).subscribe((_extraModulePrices: ExtraModulePrice[]) => {
      this.extraModulePrices = _extraModulePrices;
    }, error => {
      this.alertify.error(error);
    });
  }

  editExtraModulePrice(id: string) {
    this.router.navigate(['/editextramoduleprice', id]);
  }

  deleteExtraModulePrice(id: string) {
    this.extraModulePriceService.delete(id).subscribe(() => {
      this.getByModule(this.extramoduleid);
    }, error => {
      this.alertify.error(error);
    });
  }

}
