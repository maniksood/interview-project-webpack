import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import {AgmCoreModule} from '@agm/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ModulesListComponent } from './home/modules-list/modules-list.component';
import {routing} from './app-routing';
import { CityInputComponent } from './home/city-input/city-input.component';
import { YelpComponent } from './yelp/yelp.component';
import {HttpClientModule} from '@angular/common/http';
import { FoursquareComponent } from './foursquare/foursquare.component';
import { VenuesListComponent } from './foursquare/venues-list/venues-list.component';
import { VenueDetailComponent } from './foursquare/venue-detail/venue-detail.component';
import {VenueListItemComponent} from './foursquare/venues-list/venue-list-item/venue-list-item.component';
import { UberComponent } from './uber/uber.component';
// import { MapBoxModule } from 'angular-mapbox/module';







@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModulesListComponent,
    CityInputComponent,
    YelpComponent,
    FoursquareComponent,
    VenuesListComponent,
    VenueDetailComponent,
    VenueListItemComponent,
    UberComponent


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAT3av76km49-IJ0seQOeKjnU-rKXW5t9o'
    }),
    HttpClientModule,
    JsonpModule,
    // MapBoxModule.forRoot('pk.eyJ1IjoibWFuaWtzb29kOTUiLCJhIjoiY2o2Y2UydjhtMWpiOTMzdDZrZnBhMXpubiJ9.bRuX28IxzHf5NFY9uiWwrg')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
