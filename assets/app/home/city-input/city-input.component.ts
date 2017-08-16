import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {GeocoderService} from './geocoder.service';

@Component({
  selector: 'app-city-input',
  templateUrl: './city-input.component.html',
  styleUrls: ['./city-input.component.css']
})
export class CityInputComponent implements OnInit {

  constructor(private geocoderService: GeocoderService) { }

  ngOnInit() {
  }

  onCitySubmit(form: NgForm) {
    this.geocoderService.onCityInput(form.value.city)
      .subscribe((data: any) => {
        console.log(data);
      });
  }

}
