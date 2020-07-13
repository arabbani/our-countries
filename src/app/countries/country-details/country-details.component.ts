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
  borderCountryNames: string[];

  constructor(private route: ActivatedRoute, private countryService: CountryService, private location: Location) { }

  ngOnInit(): void {
    this.country = this.route.snapshot.data['country'];
    this.borderCountryNames = this.getBorderCountries();
  }

  getBorderCountries(): string[] {
    return this.countryService.getCountryNameByCode(this.country.borders);
  }

  goBack(): void {
    this.location.back();
  }

}
