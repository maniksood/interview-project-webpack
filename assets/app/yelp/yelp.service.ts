///<reference path="../../../node_modules/rxjs/add/operator/map.d.ts"/>

import {EventEmitter, Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions, Jsonp} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {GeocoderService} from '../home/city-input/geocoder.service';
@Injectable()
export class YelpService {
  restaurents = [];
  private clientId = '6FRp928VK5yxcNNjlTjKiA';
  private client_secret = 'RjhPs1fHv1ddMBJaJyLYiPFVK5V49DrS2PjhX8C51N0MU00YiCJw0LKoYm44CxvU';
  constructor(private httpClient: HttpClient, private geocoderService: GeocoderService, private http: Http, private jsonp: Jsonp) {}
  private access_token;

  private lat;
  private lng;

  // onCityInput(city: string) {
    // return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + city + '&key=AIzaSyAT3av76km49-IJ0seQOeKjnU-rKXW5t9o')
    //   .map((response: Response) => {
    //     // console.log(response.json().results[0].geometry.location);
    //     this.lat = response.json().results[0].geometry.location.lat;
    //     this.lng = response.json().results[0].geometry.location.lng;
    //     this.latemit.emit(this.lat);
    //     this.lngemit.emit(this.lng);
    //     this.citySelected.emit(true);
    //     response.json();
    //   });
  // }

  getRestaurents() {

    // const getheaders = new Headers();
    // getheaders.append('Authorization', 'Bearer hR0lTlxCUowGAU0ununP3WMM5TDT6UwiuNlUIrGqyEzpHxUJnP3ppQFjn9Xc1B6BV0djGg_Euyy3frYpMfSkoexzTi-mgzYOmCYmwlradDDDAqncKmpuDSkfiEGSWXYx');

    // const body = 'grant_type=client_credentials&client_id=' + this.clientId + '&client_secret=' + this.client_secret;
    // return this.httpClient.post('https://api.yelp.com/oauth2/token', body, {headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')})
    //   .map((response: Response) => {
    //     this.access_token = response['access_token'];
    //   });

    this.lat = this.geocoderService.lat;
    this.lng = this.geocoderService.lng;

    const headers = new Headers({ 'Content-Type': 'text/plain' });
    headers.set('Authorization', `Bearer hR0lTlxCUowGAU0ununP3WMM5TDT6UwiuNlUIrGqyEzpHxUJnP3ppQFjn9Xc1B6BV0djGg_Euyy3frYpMfSkoexzTi-mgzYOmCYmwlradDDDAqncKmpuDSkfiEGSWXYx`);
    headers.set('Access-Control-Allow-Methods', 'GET');
    headers.set('Access-Control-Allow-Headers', 'authorization');

    const options = new RequestOptions({ headers: headers });

    return this.http.get('https://api.yelp.com/v3/businesses/search?term=restaurants&latitude=' + '41.8781136' + '&longitude=' + '-87.6297982' + '&sort_by=rating&open_now=true', options)
      .map((response: Response) => {
        console.log(response);

      })
      .catch((error: Response) => Observable.throw(error));

  }



}
