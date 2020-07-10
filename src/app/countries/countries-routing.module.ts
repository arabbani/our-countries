import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './countries/countries.component';
import { CountryComponent } from './country/country.component';
import { CountryDetailsComponent } from './country-details/country-details.component';


const routes: Routes = [
  {
    path: 'countries',
    component: CountriesComponent
  },
  {
    path: 'countries/:countryCode',
    component: 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountriesRoutingModule { 
  static readonly components = [CountriesComponent, CountryComponent, CountryDetailsComponent];
}
