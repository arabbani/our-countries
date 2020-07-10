import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CountriesRoutingModule } from './countries-routing.module';


@NgModule({
  declarations: CountriesRoutingModule.components,
  imports: [
    CommonModule,
    CountriesRoutingModule
  ]
})
export class CountriesModule { }
