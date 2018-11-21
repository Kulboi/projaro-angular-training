import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-occupation',
  templateUrl: './occupation.component.html',
  styleUrls: ['./occupation.component.css']
})
export class OccupationComponent implements OnInit {

  user_details: any = {}
  
  constructor() { }

  ngOnInit() {
  }

}
