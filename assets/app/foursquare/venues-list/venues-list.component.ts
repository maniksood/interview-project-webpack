import { Component, OnInit } from '@angular/core';
import {FoursquareService} from '../foursquare.service';

@Component({
  selector: 'app-venues-list',
  templateUrl: './venues-list.component.html',
  styleUrls: ['./venues-list.component.css']
})
export class VenuesListComponent implements OnInit {

  venues = [];



  constructor(private foursquareService: FoursquareService) { }

  ngOnInit() {
    this.foursquareService.getVenues()
      .subscribe((response) => {
        this.venues = response;
        console.log(this.venues);
      });
  }

}
