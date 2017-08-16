import { Component, OnInit } from '@angular/core';
import {GeocoderService} from './city-input/geocoder.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  cityIsSelected = false;
  title: string = '';
  lat: string;
  lng: string;


  constructor(private geocoderService: GeocoderService) {}

  ngOnInit() {
    this.geocoderService.citySelected.subscribe(
      (data: boolean) => {
        this.cityIsSelected = data;
      }
    );

    this.geocoderService.latemit.subscribe(
      (data: string) => {
        this.lat = data;
      }
    );

    this.geocoderService.lngemit.subscribe(
      (data: string) => {
        this.lng = data;
      }
    );


  }

}
