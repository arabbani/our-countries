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
      this.filteredCountries = this.countries.slice(0);
    });
  }

  searchByName(search: string): void {
    this.searchCriteria.name = search;
    this.filter();
  }

  filter(): void {
    this.filteredCountries = this.countries.filter(country => country.name.toLowerCase().includes(this.searchCriteria.name));
  }

}
