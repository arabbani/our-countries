import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../model/country';
import { CountryService } from '../country.service';

@Component({
  selector: 'wc-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {

  country: Country;
  borderCountries: Country[];

  constructor(private route: ActivatedRoute, private countryService: CountryService, private location: Location) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.country = data['country'];
      this.borderCountries = this.getBorderCountries();
    });
    
  }

  getBorderCountries(): Country[] {
    return this.countryService.mapCountryCodesToCountryDetails(this.country.borders);
  }

  goBack(): void {
    this.location.back();
  }

}
