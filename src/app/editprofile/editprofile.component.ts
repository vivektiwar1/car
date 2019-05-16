import { Component, OnInit } from "@angular/core";
import { UserService } from "./../_services/user.service";
import { User } from "./../models/User";
import {  ActivatedRoute } from "@angular/router";
import { LanguageService } from "./../_services/language.service";
import { CountryService } from "./../_services/country.service";
import { Language } from "../models/Language";
import { City } from "./../models/City";
import { Country } from "./../models/Country";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-editprofile",
  templateUrl: "./editprofile.component.html",
  styleUrls: ["./editprofile.component.css"]
})
export class EditprofileComponent implements OnInit {
  currentUser = {} as User;
  months: number[];
  currentMonth:number=1;
  days: number[];
  currentDay:number=1;
  years: number[];
  currentYear:number=1;
  languages: Language[] = [];
  cities: City[] = [];
  countries: Country[] = [];
  registerForm: FormGroup;


  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private languageService: LanguageService,
    private countryService: CountryService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.getLanguages();
    this.days = this.arrayThree(31, 1);
    this.months = this.arrayThree(12, 1);
    this.years = this.arrayThree( (new Date().getFullYear()-16)-1950, 1950);
    this.createRegisterForm();

    this.route.paramMap.subscribe(param => {
      this.userService.getUser(param.get("id")).subscribe(response => {
        this.currentUser = response;
        
        var dt = new Date(this.currentUser.dateOfBirth);
        this.currentDay = dt.getDate();
        this.currentMonth = dt.getMonth()+1;
        this.currentYear = dt.getFullYear();
      });
    });
  }

  createRegisterForm() {
    this.registerForm = this.fb.group({
      FirstName: ["", Validators.required],
      LastName: ["", Validators.required],
      Email: ["", Validators.required],
      Date: ["", Validators.required],
      Month: ["", Validators.required],
      Year: ["", Validators.required],
      Address: ["", Validators.required],
      Phone: ["", Validators.required],

      UserName: ["", Validators.required],
      Password: [
        "",
        [Validators.required, Validators.minLength(4), Validators.maxLength(8)]
      ],

      PostalCode: ["", Validators.required],
      Country: ["", Validators.required],
      City: ["", Validators.required]
    });
  }

  getLanguages(): any {
    this.languageService.getLanguages().subscribe((_languages: Language[]) => {
      this.languages = _languages;
    });
  }
  getCities(countryId: string): any {
    this.countryService.getCitiesByCountryId(countryId).subscribe(data => {
      this.cities = data;
    });
  }

  getCountries(): any {
    this.countryService.getCountries().subscribe(data => {
      this.countries = data; //data['countries'];
    });
  }

  arrayThree(n: number, startFrom: number): number[] {
    return new Array(n).fill(1).map((x, i) => i + startFrom);
  }

  checkIsEmpty(event: any) {
    var control = <HTMLInputElement>document.getElementById(event.target.id);
    if (control.value.length > 0) {
      control.classList.add("active-form");
    } else {
      control.classList.remove("active-form");
    }
  }

  onFocusField(event: any) {
    document.getElementById(event.target.id).classList.add("active-form");
  }
}
