import { Component, OnInit } from '@angular/core';
import { ExtramodulepriceService } from '../../../_services/extramoduleprice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExtramoduleService } from '../../../_services/extramodule.service';
import { CountryService } from '../../../_services/country.service';
import { ExtraModule } from '../../../models/extramodule';
import { AlertifyService } from '../../../_services/alertify.service';
import { Country } from '../../../models/Country';
import { ExtraModulePrice } from '../../../models/ExtraModulePrice';

@Component({
  selector: 'app-createextramoduleprice',
  templateUrl: './createextramoduleprice.component.html',
  styleUrls: ['./createextramoduleprice.component.css']
})
export class CreateextramodulepriceComponent implements OnInit {
  extraModules: ExtraModule[];
  countries: Country[];
  extraModulePriceForm: FormGroup;
  addBtn: boolean;
  extraModulePrice: ExtraModulePrice;
  extramoduleId: string;

  constructor(private extraModulePriceService: ExtramodulepriceService, private route: ActivatedRoute,
     private router: Router, private fb: FormBuilder, private extraModuleService: ExtramoduleService,
     private countryService: CountryService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.getFormData();
    this.route.paramMap.subscribe(param => {
      const id = param.get('id');
      this.extramoduleId = param.get('extramoduleid');
      this.addBtn = true;
      this.extraModulePriceForm = this.fb.group({
        id: [''],
        currencySymbolId: [''],
        countryId: [''],
        price: ['', Validators.required],
        extraModuleId: [this.extramoduleId, Validators.required]
      });
      if (id.toString() !== '0') {
        this.addBtn = false;
        this.extraModulePriceService.getExtraModulePrice(id).subscribe((_extraModulePrice: ExtraModulePrice) => {
          this.extraModulePriceForm.setValue({
            id: _extraModulePrice.id,
            currencySymbolId: _extraModulePrice.currencySymbolId,
            countryId: _extraModulePrice.countryId,
            price: _extraModulePrice.price,
            extraModuleId: _extraModulePrice.extraModuleId
          });
        });
      }
    });
  }


  getFormData() {
    this.route.data.subscribe(data => {
      console.log(data);
      this.extraModulePrice = data['extramodulepricedata'];
    });
  }

  onSubmit() {
    this.extraModulePrice = Object.assign({}, this.extraModulePriceForm.value);
    if (this.extraModulePrice.id === ''){
      this.extraModulePrice.id = '00000000-0000-0000-0000-000000000000';
      this.extraModulePriceService.create(this.extraModulePrice).subscribe(() => {
        this.alertify.success('Created successfully');
        this.router.navigate(['/extramoduleprice', this.extramoduleId]);
      }, error => {
        this.alertify.error(error);
      });
    } else {
      this.extraModulePriceService.update(this.extraModulePrice).subscribe(() => {
        this.router.navigate(['/extramoduleprice', this.extramoduleId]);
      });
  }
  }

}
