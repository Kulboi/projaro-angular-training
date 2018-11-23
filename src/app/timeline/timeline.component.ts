import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  post_string: String = '';
  disable: boolean = false;
  notify: any = {
    show: false,
    msg: '',
    type: ''
  }
  posts: any = []

  constructor(
    private _appservice: AppService
  ) {
    setInterval(() => {
      this.getPosts()
    }, 5000)
   }

  ngOnInit() {
  }

  postData() {
    this.disable == true;
    let User = JSON.parse(localStorage.getItem('konnect_user_data'));
    let data = { User, content: this.post_string };
    this._appservice.postData(data).subscribe((res: any) => {
      this.disable = false;
      if(res.status == 201) {
        this.post_string = '';
        this.notify.show = true;
        this.notify.msg = res.content;
        this.notify.type = 'alert-success';
        setTimeout(() => {
          this.notify.show = false;
          this.notify.msg = '';
          this.notify.type = '';
        }, 5000)
      }else {
        this.notify.show = true;
        this.notify.msg = res.content;
        this.notify.type = 'alert-danger';
        setTimeout(() => {
          this.notify.show = false;
          this.notify.msg = '';
          this.notify.type = '';
        }, 5000)
      }
    })
  }

  getPosts() {
    this._appservice.getData().subscribe((res: any) => {
      this.posts = res.content
    })
  }

}
