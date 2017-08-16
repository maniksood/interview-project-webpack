import { Component, OnInit } from '@angular/core';
import {UberService} from './uber.service';

@Component({
  selector: 'app-uber',
  templateUrl: './uber.component.html',
  styleUrls: ['./uber.component.css']
})
export class UberComponent implements OnInit {

  constructor(private uberService: UberService) { }

  ngOnInit() {
  }

  status;


  bookUber(){
    this.uberService.bookingUber().subscribe((response) => {
      this.status = response;
    });
  }

}
