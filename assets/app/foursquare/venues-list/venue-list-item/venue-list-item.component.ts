import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-venue-list-item',
  templateUrl: './venue-list-item.component.html',
  styleUrls: ['./venue-list-item.component.css']
})
export class VenueListItemComponent implements OnInit {

  @Input() venue;

  @Input() index;
  constructor() { }

  ngOnInit() {
  }

}
