import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-account-header',
  templateUrl: './account-header.component.html',
  styleUrls: ['./account-header.component.css']
})
export class AccountHeaderComponent implements OnInit {
  current_route: String = '';

  constructor(
    private _location: Location
  ) {
    this.currentRoute()
   }

  ngOnInit() {
  }

  currentRoute() {
    let route = this._location.path();
    console.log(route)
    this.current_route = route
  }

}
