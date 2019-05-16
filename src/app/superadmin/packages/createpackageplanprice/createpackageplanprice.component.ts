import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PackagePlanPrice } from '../../../models/PackagePlanPrice';
import { Country } from '../../../models/Country';
import { PackagePlan } from '../../../models/PackagePlan';
import { CurrencySymbol } from '../../../models/CurrencySymbol';
import { CountryService } from '../../../_services/country.service';
import { PackageplanService } from '../../../_services/packageplan.service';
import { PackageplanpriceService } from '../../../_services/packageplanprice.service';
import { AlertifyService } from '../../../_services/alertify.service';

@Component({
  selector: 'app-createpackageplanprice',
  templateUrl: './createpackageplanprice.component.html',
  styleUrls: ['./createpackageplanprice.component.css']
})
export class CreatepackageplanpriceComponent implements OnInit {
  packagePlanPriceForm: FormGroup;
  packagePlanPrice: PackagePlanPrice;
  countries: Country[];
  packages: PackagePlan[];
  currencySymbols: CurrencySymbol[];
  addBtn: boolean;
  packageId: string;

  // tslint:disable-next-line:max-line-length
  constructor(private fb: FormBuilder, private alertify: AlertifyService, private packagePlanPriceService: PackageplanpriceService, private countryService: CountryService, private packagePlanService: PackageplanService, private _route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getFormData();
    this._route.paramMap.subscribe(param => {
      const id = param.get('id');
      this.packageId = param.get('packageid');
      this.addBtn = true;
      this.packagePlanPriceForm = this.fb.group({
        id: [''],
        currencySymbolId: [''],
        countryId: [''],
        price: ['', Validators.required],
        packagePlanId: [this.packageId, Validators.required]
      });
      if (id.toString() !== '0') {
        this.addBtn = false;
        this.packagePlanPriceService.getById(id).subscribe((_packagePlanPrice: PackagePlanPrice) => {
          this.packagePlanPriceForm.setValue({
            id: _packagePlanPrice.id,
            currencySymbolId: _packagePlanPrice.currencySymbolId,
            countryId: _packagePlanPrice.countryId,
            price: _packagePlanPrice.price,
            packagePlanId: _packagePlanPrice.packagePlanId
          });
        });
      }
    });
  }

  getFormData(): any {
    this._route.data.subscribe(data => {
      this.packagePlanPrice = data['packageplanpricedata'];
    });
  }

  onSubmit() {
    this.packagePlanPrice = Object.assign({}, this.packagePlanPriceForm.value);
    this.packagePlanPrice.id = '00000000-0000-0000-0000-0000000000aa';
    this.packagePlanPriceService.create(this.packagePlanPrice).subscribe(() => {
      this.alertify.success('Created successfully');
      this.router.navigate(['/packageplanprices', this.packageId]);
    }, error => {
      this.alertify.error(error);
    });
  }



}
