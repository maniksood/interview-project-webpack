import { Component, OnInit } from '@angular/core';
import {YelpService} from './yelp.service';

@Component({
  selector: 'app-yelp',
  templateUrl: './yelp.component.html',
  styleUrls: ['./yelp.component.css']
})
export class YelpComponent implements OnInit {

  title = 'Manik';

  constructor(private yelpService: YelpService) { }

  ngOnInit() {
    this.yelpService.getRestaurents().subscribe(
      (response) => {
        console.log(response);
        this.title = 'Sood';
      }
    );
  }

}
