import { Injectable } from '@angular/core';
import {GeocoderService} from '../home/city-input/geocoder.service';
import {Http} from '@angular/http';

@Injectable()
export class UberService {

  constructor(private geocoderService: GeocoderService, private http: Http) { }

  lat;
  lng;

  bookingUber(){
    this.lat = this.geocoderService.lat;
    this.lng = this.geocoderService.lng;

    return this.http.get('http://localhost:3000/uber/book')
      .map((response) => {
        console.log(response);
        return response;
      });
  }



}
