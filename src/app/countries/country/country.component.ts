import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Country } from '../country';

@Component({
  selector: 'wc-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountryComponent implements OnInit {

  @Input() country: Country;

  constructor() { }

  ngOnInit(): void {
  }

}
