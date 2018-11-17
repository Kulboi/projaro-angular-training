import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AppService } from './../app.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any = {};
  disable: boolean = false;
  error: any = {
    show: false,
    msg: ''
  };

  constructor(
    private _appservice: AppService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  /*
    Method: login()
    Purpose: Login user to system
  */
  login() {
    this.disable = true
    this._appservice.login(this.user)
      .subscribe(res => {
        this.disable = false
        if(res.status == 200) {
          this._router.navigate(['/profile'])
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
