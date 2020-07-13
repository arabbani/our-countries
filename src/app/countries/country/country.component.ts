import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Country } from '../model/country';

@Component({
  selector: 'wc-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountryComponent {

  @Input() country: Country;

}
