import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { Country } from '../model/country';

@Component({
  selector: 'wc-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  countries: Country[];
  filteredCountries: Country[];

  searchCriteria = {
    name: '',
    region: ''
  };

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.countryService.getAll().subscribe((response) => {
      this.countries = response;
      //console.log(this.countries);
      this.filteredCountries = this.countries.slice(0);
    });
  }

  searchByName(search: string): void {
    this.searchCriteria.name = search;
    this.filter();
  }

  searchByRegion(region: string): void {
    this.searchCriteria.region = region;
    this.filter();
  }

  filter(): void {
    //console.log(this.searchCriteria);
    this.filteredCountries = this.countries.filter(country => {
      return country.name.toLowerCase().includes(this.searchCriteria.name.toLowerCase()) && country.region.toLowerCase().includes(this.searchCriteria.region.toLowerCase());
    });
  }

}
