import { Component, OnInit } from '@angular/core';
import { PackagePlanPrice } from '../../../models/PackagePlanPrice';
import { PackageplanpriceService } from '../../../_services/packageplanprice.service';
import { AlertifyService } from '../../../_services/alertify.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-packageplanprice',
  templateUrl: './packageplanprice.component.html',
  styleUrls: ['./packageplanprice.component.css']
})
export class PackageplanpriceComponent implements OnInit {
  packagePlanPrices: PackagePlanPrice[];
  packageid: string;
  constructor(private packagePlanPriceService: PackageplanpriceService,
    private alertify: AlertifyService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const params: any = this.route.snapshot.params;
    this.packageid = params.id.toString();
    this.getPackagePlanPrices(this.packageid);
  }

  getPackagePlanPrices(packagePlanId) {
    this.packagePlanPriceService.getAllByPackagePlan(packagePlanId).subscribe((_packagePlanPrice: PackagePlanPrice[]) => {
      this.packagePlanPrices = _packagePlanPrice;
      console.log(this.packagePlanPrices);
    }, error => {
      this.alertify.error(error);
    });
  }

  editPackagePlanPrice(id: string) {
    this.router.navigate(['/editpackageplanprice', id]);
  }


}
