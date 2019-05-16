import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/models/Country';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CountryService } from 'src/app/_services/country.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-country-notify-settings',
  templateUrl: './country-notify-settings.component.html',
  styleUrls: ['./country-notify-settings.component.css']
})
export class CountryNotifySettingsComponent implements OnInit {

  country: Country;
  countryForm: FormGroup;

  constructor(
    private countryService: CountryService,
    private alertify: AlertifyService,
    private fb: FormBuilder,
    private _route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.countryForm = this.fb.group(
      {
        id: ['', Validators.required],
        notifyByEmail: [false],
        notifyBySMS: [false],
        otherNotify: [false]
      });

    this._route.paramMap.subscribe(param => {
      const id = param.get('id');
      if (!id) {
        this.alertify.success('Id is not defined');
        this.router.navigate(['/countries']);
      } else{
        this.createEditForm(id.toString());
      }
    });
  }

  createEditForm(id: string) {
    this.countryService.getCountry(id).subscribe((data: Country ) => {
      this.country = data;
      this.countryForm = this.fb.group(
          {
            id: [data.id, Validators.required],
            notifyByEmail: [data.notifyByEmail],
            notifyBySMS: [data.notifyBySMS],
            otherNotify: [data.otherNotify]
          });
      });
    }

    editCountry() {
      if (this.countryForm.valid) {
        this.country.notifyByEmail = this.countryForm.controls['notifyByEmail'].value;
        this.country.notifyBySMS = this.countryForm.controls['notifyBySMS'].value;
        this.country.otherNotify = this.countryForm.controls['otherNotify'].value;
        this.countryService.update(this.country).subscribe(() => {
          this.alertify.success('Notify settings updated successfully');
          this.router.navigate(['/countries']);
        }, error => {
          this.alertify.error(error);
        });
      }
    }

}
