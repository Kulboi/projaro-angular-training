import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from './../app.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userId: String = '';
  user_details: any = {};
  disable: boolean = false;
  current_section: String = 'profile';

  constructor(
    private _appservice: AppService,
    private route: ActivatedRoute
  ) { 
    this.getUserId();
    this._appservice.authorizeRoute();
  }

  ngOnInit() {
    this.userData();
  }

  getUserId() {
    this.route.params.subscribe(params => {
      this.userId = params.id
    })
  }

  userData() {
    this._appservice.getUserData(this.userId).subscribe((res: any) => {
      this.user_details = res.content
    })
  }

  updateUserProfile() {
    this.disable = true;
    this._appservice.updateUserProfile(this.userId, this.user_details)
      .subscribe((res: any) => {
        if(res.status == 200) {
          this.disable = false
          this.userData()
        }
      })
  }

  changeSection(section) {
    this.current_section = section;
  }

}
