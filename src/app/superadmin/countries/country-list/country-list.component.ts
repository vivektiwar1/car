import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/_services/country.service';
import { Country } from 'src/app/models/Country';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
  countries: Country[];

  constructor(private countryService: CountryService, private router: Router) { }

  ngOnInit() {
    this.getCountries();
  }

  getCountries(): any {
    this.countryService.getCountriesSuperAdmin().subscribe(data => {
      this.countries = data;
    });
  }

  editCountry(id: string) {
    this.router.navigate(['/createcountry', id]);
  }
}
