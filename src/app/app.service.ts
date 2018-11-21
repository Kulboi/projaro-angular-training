import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Router } from "@angular/router";

const service_base = 'https://projaro-training-api.herokuapp.com/api/';
// const service_base = 'http://127.0.0.1:5000/api/';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private _http: HttpClient,
    private _route: Router
  ) { }
  
  /*
    Method: @register
    Purpose: Register new user
  */
  authorizeRoute() {
    let user = localStorage.getItem('konnect_user_data')
    if(user == undefined) {
      this._route.navigate(['/'])
    }
  }

  /*
    Method: @register
    Purpose: Register new user
  */
  register(data) {
    return this._http.post(`${service_base}user`, data)
  }

  /*
    Method: @login
    Purpose: Authenticating users
  */
  login(data) {
    return this._http
      .post(`${service_base}user/login`, data)
  }

  /*
    Method: @getUserData
    Purpose: Get user data
  */
  getUserData(id) {
    return this._http.get(`${service_base}user/${id}`)
  }

  /*
    Method: @updateUserProfile
    Purpose: Update a user's profile data
  */
  updateUserProfile(id, data) {
    return this._http.put(`${service_base}user/${id}`, data)
  }

}
