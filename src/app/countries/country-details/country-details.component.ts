import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../country';

@Component({
  selector: 'wc-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {

  country: Country;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.country = this.route.snapshot.data['country'];
    console.log(this.country);
  }

}
