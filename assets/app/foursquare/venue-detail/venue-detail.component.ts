import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {FoursquareService} from '../foursquare.service';
@Component({
  selector: 'app-venue-detail',
  templateUrl: './venue-detail.component.html',
  styleUrls: ['./venue-detail.component.css']
})
export class VenueDetailComponent implements OnInit {

  id;
  venue;
  constructor(private activatedRoute: ActivatedRoute, private foursquareService: FoursquareService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];


      this.foursquareService.getVenue(this.id)
        .subscribe((response) => {
          this.venue = response;
        });



    });
  }

}


