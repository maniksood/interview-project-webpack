


import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {YelpComponent} from './yelp/yelp.component';
import {FoursquareComponent} from './foursquare/foursquare.component';
import {VenueDetailComponent} from './foursquare/venue-detail/venue-detail.component';
import {UberComponent} from './uber/uber.component';
const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'restaurents', component: YelpComponent },
  { path: 'venues', component: FoursquareComponent, children: [
    { path: ':id', component: VenueDetailComponent }
  ]},
  { path: 'cabs', component: UberComponent },

];

export const routing = RouterModule.forRoot(APP_ROUTES);
