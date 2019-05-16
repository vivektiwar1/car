import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { AuthService } from "src/app/_services/auth.service";
import { AlertifyService } from "src/app/_services/alertify.service";
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Country } from "../models/Country";
import { environment } from "src/environments/environment";
import { City } from "../models/City";
import { User } from "../models/User";
import { CountryService } from "../_services/country.service";
import { Language } from "../models/Language";
import { LanguageService } from "../_services/language.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  model: any = {};
  loginMode: boolean = true;

  @Input() valuesFromHome: any;
  @Output() cancelRegister = new EventEmitter();
  user: User;
  registerForm: FormGroup;
  // tslint:disable-next-line:no-inferrable-types
  nextStep: boolean = false;
  hasBaseDropZoneOver = false;
  baseUrl = environment.apiUrl;
  countries: Country[];
  languages: Language[];
  cities: City[];
  months: number[];
  days: number[];
  years: number[];
  lastStep: boolean = false;
  constructor(
    public authService: AuthService,
    private alertify: AlertifyService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private countryService: CountryService,
    private languageService: LanguageService
  ) {}

  ngOnInit() {
    this.lastStep = false;
    this.createRegisterForm();
    this.getCountries();
    this.getLanguages();
    this.days = this.arrayThree(31, 1);
    this.months = this.arrayThree(12, 1);
    this.years = this.arrayThree(20, 2000);
    //  Script for styling the upload photo
    var inputs = document.querySelectorAll(".inputfile");
    Array.prototype.forEach.call(inputs, function(input) {
      var label = input.nextElementSibling,
        labelVal = label.innerHTML;

      input.addEventListener("change", function(e) {
        var fileName = "";
        if (this.files && this.files.length > 1) {
          fileName = (this.getAttribute("data-multiple-caption") || "").replace(
            "{count}",
            this.files.length
          );
        } else {
          fileName = e.target.value.split("\\").pop();
        }
        if (fileName) {
          label.querySelector("span").innerHTML = fileName;
        } else {
          label.innerHTML = labelVal;
        }
      });
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

  createRegisterForm() {
    this.registerForm = this.fb.group(
      {
        FirstName: ["", Validators.required],
        LastName: ["", Validators.required],
        Email: ["", Validators.required],
        Date: ["", Validators.required],
        Month: ["", Validators.required],
        Year: ["", Validators.required],
        Address: ["", Validators.required],
        Phone: ["", Validators.required],
        CompanyName: ["", Validators.required],
        UserName: ["", Validators.required],
        Password: [
          "",
          [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(8)
          ]
        ],
        CompanyEmail: ["", Validators.required],
        CompanyPhone: ["", Validators.required],
        CompanyAddress: ["", Validators.required],
        PostalCode: ["", Validators.required],
        Country: ["", Validators.required],
        City: ["", Validators.required],
        confirmPassword: ["", Validators.required],
        Logo: [""]
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
    return g.get("Password").value === g.get("confirmPassword").value
      ? null
      : { mismatch: true };
  }

  register() {
    if (this.registerForm.valid) {
      this.user = Object.assign({}, this.registerForm.value);
      const year = this.registerForm.get("Year").value as number;
      const month = this.registerForm.get("Month").value as number;
      const day = this.registerForm.get("Date").value as number;
      this.user.dOB = new Date(year, month, day, 0, 0, 0);
      this.authService.register(this.user).subscribe(
        () => {
          this.lastStep = true;
          //this.alertify.success("Registration successful");
        },
        error => {
          this.alertify.error(error);
        },
        () => {
          // this.authService.login(this.user).subscribe(() => {
          //   this.router.navigate(["/members"]);
          // });
        }
      );
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
    //  var tmppath = URL.createObjectURL(event.target.files[0]);
    document.getElementById("logoSpan").innerHTML = event.target.files[0].name;
  }

  arrayThree(n: number, startFrom: number): number[] {
    return new Array(n).fill(1).map((x, i) => i + startFrom);
  }
  setLoginMode(part: string) {
    this.loginMode = part == "login";
  }
  login() {
    console.log(this.model);
    this.authService.login(this.model).subscribe(
      next => {
        
        this.router.navigate(["/home"]);
        //this.alertify.success("Logged in successfully");
      },
      error => {
        this.alertify.error(error.message);
      }
    );
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("refreshToken");
    this.authService.decodedToken = null;
    this.authService.currentUser = null;
    this.alertify.message("logged out");
    this.router.navigate(["/home"]);
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
