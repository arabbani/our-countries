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

  toggleDropdown(){
      this.showDropdownMenu = !this.showDropdownMenu;       
      this.isDropdownActive = !this.isDropdownActive;       
  }

  onSelect(region: string): void {
    this.filterRegion.emit(region);
  }

}
