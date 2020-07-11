import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CountriesRoutingModule } from './countries-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: CountriesRoutingModule.components,
  imports: [
    CommonModule,
    CountriesRoutingModule,
    SharedModule
  ]
})
export class CountriesModule { }
