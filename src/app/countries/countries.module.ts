import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CountriesRoutingModule } from './countries-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: CountriesRoutingModule.components,
  imports: [
    CommonModule,
    CountriesRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class CountriesModule { }
