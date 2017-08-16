import { Injectable } from '@angular/core';
import {GeocoderService} from '../home/city-input/geocoder.service';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
// import 'rxjs/RX';

@Injectable()
export class FoursquareService {

  venues = [];

  constructor(private geocoderService: GeocoderService, private http: Http) { }

  lat;
  lng;


  getVenues() {

    // this.geocoderService.latemit.subscribe((data) => {
    //   this.lat = data;
    // });
    //
    // this.geocoderService.lngemit.subscribe((data) => {
    //   this.lng = data;
    // });


    this.lat = this.geocoderService.lat;
    this.lng = this.geocoderService.lng;

    return this.http.get('https://api.foursquare.com/v2/venues/search?ll=' + this.lat + ',' + this.lng + '&query=food&oauth_token=VNR5WRF43OEXH5F5PMAAC3JMZN5TQFUMOOJNAPAUMDIZUBAH&v=20170815')
      .map((response) => {
        // console.log(response.json().response.venues);
        this.venues = response.json().response.venues;
        return response.json().response.venues;

      })
      .catch((error: Response) => Observable.throw(error));
  }

  getVenue(id) {
    // return this.venues.slice(parseInt(id, 10), (parseInt(id, 10) + 1));
    return this.http.get('https://api.foursquare.com/v2/venues/' + id + '?oauth_token=VNR5WRF43OEXH5F5PMAAC3JMZN5TQFUMOOJNAPAUMDIZUBAH&v=20170815')
      .map((response) => {
        // console.log(response.json().response.venues);
        // this.venues = response.json().response.venues;
        // console.log(response)
        return response.json().response.venue;

      })
      .catch((error: Response) => Observable.throw(error));
  }


}
