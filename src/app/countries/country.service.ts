import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Country } from './country';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

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

  getCountryNameByCode(countryCodes: string[]): string {
    console.log('qq ', this.countries.getValue());
    this.countries$.subscribe(r => console.log(r));
    return '';
  }
}
