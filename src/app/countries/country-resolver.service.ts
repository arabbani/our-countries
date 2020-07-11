import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { Country } from './country';
import { CountryService } from './country.service';
import { tap, take, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryResolverService implements Resolve<Country> {

  constructor(private countryService: CountryService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Country> {
    const countryCode: string | null = route.paramMap.get('countryCode');
    if (countryCode) {
      return this.countryService.getByCode(countryCode)
        .pipe(
          take(1),
          mergeMap(country => {
            if(country) {
              return of(country);
            }
            return EMPTY;
          })
        )
    }
    return EMPTY;
  }
}
