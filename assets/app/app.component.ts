import { Component } from '@angular/core';
import {GeocoderService} from './home/city-input/geocoder.service';
import {YelpService} from './yelp/yelp.service';
import {FoursquareService} from './foursquare/foursquare.service';
import {UberService} from './uber/uber.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GeocoderService, YelpService, FoursquareService, UberService]
})
export class AppComponent {
  title = 'app';
}
