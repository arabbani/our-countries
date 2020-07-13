import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'wc-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {

  @Output() filterRegion = new EventEmitter<string>();

  showDropdownMenu: boolean = false;
  isDropdownActive: boolean = false;

  regions: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Ocenia'];
  selectedRegions: string = "Filter By Region";

  toggleDropdown(){
      this.showDropdownMenu = !this.showDropdownMenu;       
      this.isDropdownActive = !this.isDropdownActive;       
  }

  onSelect(region: string): void {
    this.filterRegion.emit(region);
    this.selectedRegions = region ? region : "All";
    this.showDropdownMenu = false;       
    this.isDropdownActive = false; 
  }

}
