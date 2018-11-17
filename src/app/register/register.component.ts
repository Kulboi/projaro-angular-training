import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AppService } from './../app.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: any = {}
  disable: boolean = false
  error: any = {
    show: false,
    msg: ''
  };

  constructor(
    private _appservice: AppService,
    private _router: Router
  ) { 
  }

  ngOnInit() {
  }

  /*
    Method: register()
    Purpose: Create new user
  */
  register() {
    this.disable = true;
    this._appservice.register(this.user)
      .subscribe(res => {
        this.disable = false;
        if(res.status == 201) {
          this._router.navigate(['']);
        }else {
          this.error.show = true;
          this.error.msg = res.content;
          setTimeout(() => {
            this.error.show = false;
            this.error.msg = '';
          }, 5000);
        }
      })
  }

}
