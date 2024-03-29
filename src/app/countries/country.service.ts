import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Country } from './model/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private readonly apiUrl: string = environment.apiUrl;
  private countries = new BehaviorSubject<Country[]>([]);

  countries$: Observable<Country[]> = this.countries.asObservable();

  constructor(private http: HttpClient) { }

  getAll(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/all`)
      .pipe(
        tap(response => this.countries.next(response))
      )
  }

  getByCode(countryCode: string): Observable<Country> {
    return this.http.get<Country>(`${this.apiUrl}/alpha/${countryCode}`);
  }

  mapCountryCodesToCountryDetails(countryCodes: string[]): Country[] {
    const countries = this.countries.getValue();
    let borderCountries: Country[] = [];
    countries.forEach(country => {
      if (countryCodes.includes(country.cioc)) {
        borderCountries.push(country);
      }
    });
    return borderCountries;
  }

}
