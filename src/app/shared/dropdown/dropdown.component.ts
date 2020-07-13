import { ChangeDetectionStrategy, Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'wc-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownComponent {

  @Output() filterRegion = new EventEmitter<string>();

  showDropdownMenu: boolean = false;

  regions: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Ocenia'];
  dropdownLabel: string = 'Filter By Region';

  onSelect(region: string): void {
    this.filterRegion.emit(region);
    this.dropdownLabel = region ? region : 'All';
    this.showDropdownMenu = false;
  }

}
