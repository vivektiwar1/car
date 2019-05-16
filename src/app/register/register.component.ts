import { Component, OnInit, Input, Output,  ChangeDetectorRef } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { User } from '../models/User';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { environment } from 'src/environments/environment';
import { Country } from '../models/Country';
import { CountryService } from '../_services/country.service';
import { City } from '../models/City';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @Input() valuesFromHome: any;
  @Output() cancelRegister = new EventEmitter();
  user: User;
  registerForm: FormGroup;
  // tslint:disable-next-line:no-inferrable-types
  nextStep: boolean = false;
  hasBaseDropZoneOver = false;
  baseUrl = environment.apiUrl;
  countries: Country[];
  cities: City[];
  months: number[];
  days: number[];
  years: number[];

  constructor(
    private authService: AuthService,
    private alertify: AlertifyService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private countryService: CountryService,
    private datePipe: DatePipe
  ) {}

  ngOnInit() {
    this.createRegisterForm();
    this.getCountries();
    this.days = this.arrayThree(31, 1);
    this.months = this.arrayThree(12, 1);
    this.years = this.arrayThree(20, 2000);
  }

  getCities(countryId: string): any {
    this.countryService.getCitiesByCountryId(countryId).subscribe(data => {
      this.cities = data;
    });
  }

  getCountries(): any {
    this.route.data.subscribe(data => {
      this.countries = data['countries'];
    });
  }

  createRegisterForm() {
    this.registerForm = this.fb.group(
      {
        FirstName: ['Drilon', Validators.required],
        LastName: ['Jahiri', Validators.required],
        Email: ['drilonj@cacttus.com', Validators.required],
        Date: ['1', Validators.required],
        Month: ['2', Validators.required],
        Year: ['3', Validators.required],
        Address: ['fdgfdgfdg', Validators.required],
        Phone: ['454545', Validators.required],
        CompanyName: ['sdfsdf', Validators.required],
        UserName: ['drilli', Validators.required],
        Password: ['password', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
        CompanyEmail: ['drilonj@cacttus.com', Validators.required],
        CompanyPhone: ['5656', Validators.required],
        CompanyAddress: ['sdfsdf', Validators.required],
        PostalCode: ['10000', Validators.required],
        Country: [null, Validators.required],
        City: [null, Validators.required],
        confirmPassword: ['password', Validators.required],
        Logo: [null]
      },
      { validator: this.passwordMatchValidator }
    );
  }

  // registerData() {
  //   this.registerForm = this.fb.group({
  //     name: ['', Validators.required]
  //   });
  // }

  submitRegisterForm() {
    console.log(this.registerForm.value);
    // this.nextStep();
  }


  passwordMatchValidator(g: FormGroup) {
    return g.get('Password').value === g.get('confirmPassword').value ? null : { mismatch: true };
  }

  register() {
    if (this.registerForm.valid) {
      this.user = Object.assign({}, this.registerForm.value);
      const year = this.registerForm.get('Year').value as number;
      const month = this.registerForm.get('Month').value as number;
      const day = this.registerForm.get('Date').value as number;
      this.user.dOB = new Date(year, month, day, 0, 0, 0);
      this.authService.register(this.user).subscribe(() => {
        this.alertify.success('Registration successful');
      }, error => {
        this.alertify.error(error);
      }, () => {
        this.authService.login(this.user).subscribe(() => {
          this.router.navigate(['/members']);
        });
      });
    }
  }

  cancel() {
    this.cancelRegister.emit(false);
  }

  changeNextStep() {
    this.nextStep = !this.nextStep;
  }

  onFileChange(event) {
      const fileToUpload = event.target.files[0];
      this.registerForm.patchValue({
        Logo: fileToUpload
      });
    }

    arrayThree(n: number, startFrom: number): number[] {
      return new Array(n).fill(1).map((x, i) => i + startFrom);
    }
}
