import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: any = {}
  disable: boolean = false
  error: any = {
    validate: false,
    msg: '',
    title: ''
  };

  constructor() { 
  }

  ngOnInit() {
  }

  /*
    Method: register()
    Purpose: Create new user
  */
  register() {
    console.log(this.user)
  }

}
