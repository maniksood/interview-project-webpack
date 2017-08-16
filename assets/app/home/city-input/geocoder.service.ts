
import {EventEmitter, Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class GeocoderService {
  citySelected = new EventEmitter<boolean>();
  lat: string;
  lng: string;
  latemit = new EventEmitter<string>();
  lngemit = new EventEmitter<string>();

  constructor(private http: Http) {}

  onCityInput(city: string) {
    return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + city + '&key=AIzaSyAT3av76km49-IJ0seQOeKjnU-rKXW5t9o')
      .map((response: Response) => {
        // console.log(response.json().results[0].geometry.location);
        this.lat = response.json().results[0].geometry.location.lat;
        this.lng = response.json().results[0].geometry.location.lng;
        this.latemit.emit(this.lat);
        this.lngemit.emit(this.lng);
        this.citySelected.emit(true);
        response.json();
      });
  }



}
