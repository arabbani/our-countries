import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DropdownComponent } from './dropdown/dropdown.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { ToStringPipe } from './to-string.pipe';
import { ReactiveFormsModule } from '@angular/forms';


const COMPONENTS = [ToStringPipe, DropdownComponent, SearchBoxComponent]

@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: COMPONENTS
})
export class SharedModule { }
