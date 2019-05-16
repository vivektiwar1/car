import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { CountryService } from 'src/app/_services/country.service';
import { Country } from 'src/app/models/Country';


@Component({ 
  selector: 'app-country-add',
  templateUrl: './country-add.component.html',
  styleUrls: ['./country-add.component.css']
})
export class CountryAddComponent implements OnInit {

  country: Country;
  countryForm: FormGroup; 

  constructor(
    private countryService: CountryService,
    private alertify: AlertifyService,
    private fb: FormBuilder,
    private router: Router,
    private _route: ActivatedRoute ) { }

  ngOnInit() {
    this.getCountryDataForAddForm();

    this.countryForm = this.fb.group(
      {
        id: ['', Validators.required],
        name: ['', Validators.required],
        code: ['', Validators.required],
        vat: ['', Validators.required],
        isDeleted: [false, Validators.required],
        languageId: [null, Validators.required],
        currencySymbolId: [null, Validators.required],
        currencyFormatId: [null, Validators.required],
        notifyByEmail: [false],
        notifyBySMS: [false],
        otherNotify: [false]
      });

    this._route.paramMap.subscribe(param => {
      const id = param.get('id');
      if (id.toString() === '0') {
        this.createCountryForm();
      } else {
        this.createEditForm(id.toString());
      }
    });
  }

  createCountryForm() {
    this.countryForm = this.fb.group(
      {
        name: ['', Validators.required],
        code: ['', Validators.required],
        vat: ['0', Validators.required],
        isDeleted: [false, Validators.required],
        languageId: [null, Validators.required],
        currencySymbolId: [null, Validators.required],
        currencyFormatId: [null, Validators.required],
        notifyByEmail: [false],
        notifyBySMS: [false],
        otherNotify: [false]
      }
    );
  }

  createEditForm(id: string) {
    this.countryService.getCountry(id).subscribe((data: Country ) => {
      this.countryForm = this.fb.group(
          {
            id: [data.id, Validators.required],
            name: [data.name, Validators.required],
            code: [data.code, Validators.required],
            vat: [data.vat, Validators.required],
            isDeleted: [data.isDeleted, Validators.required],
            languageId: [data.language.id, Validators.required],
            currencySymbolId: [data.currencySymbol.id, Validators.required],
            currencyFormatId: [data.currencyFormat.id, Validators.required],
            notifyByEmail: [data.notifyByEmail],
            notifyBySMS: [data.notifyBySMS],
            otherNotify: [data.otherNotify]
          });
      });
    }

  getCountryDataForAddForm() : any {
    this._route.data.subscribe(data => {
      this.country = data['coyntrydataaddupdate'];
    });
  }

  create() {
    if (this.countryForm.valid) {
      this.country = Object.assign({}, this.countryForm.value);
      if(this.country.id){
        this.editCountry();
      } else{
        this.createNewCountry();
      }
    }
  }

  createNewCountry() {
    this.countryService.create(this.country).subscribe(() => {
      this.alertify.success('Country created successfully');
      this.router.navigate(['/countries']);
    }, error => {
      this.alertify.error(error);
    });
  }

  editCountry() {
    this.countryService.update(this.country).subscribe(() => {
      this.alertify.success('Country updated successfully');
      this.router.navigate(['/countries']);
    }, error => {
      this.alertify.error(error);
    });
  }
}
