import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Country } from '../model/country';
import { CountryService } from '../country.service';

@Component({
  selector: 'wc-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  countries: Country[];
  filteredCountries: Country[];
  searchControl: FormControl;

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.searchControl = new FormControl();
    this.countryService.getAll().subscribe((response) => {
      this.countries = response;
      this.filteredCountries = this.countries.slice(0);
    });

    this.searchControl.valueChanges
      .pipe(
        debounceTime(200),
        distinctUntilChanged()
      ).subscribe(searchTerm => {
        this.filteredCountries = this.countries.filter(country => country.name.toLowerCase().includes(searchTerm));
      })
  }

}
