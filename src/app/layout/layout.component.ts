import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MenuItem, PrimeNGConfig } from 'primeng/api';
import { User } from '../models/user';
import { SessionService } from '../service/session.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  title = 'sondage';
  items: MenuItem[] = [];
  expToken: any;
  tokenPayload: any;
  expirationDate: any;
  private jwtHelper: JwtHelperService = new JwtHelperService;
    constructor(private primengConfig: PrimeNGConfig,
      private sessionService: SessionService,
      private router: Router, private userService: UserService) {}
    ngOnInit() {
        this.primengConfig.ripple = true;
        if (this.sessionService.getItem('token')) {
          this.items = [
            {
                label:'Enquetes',
                icon:'pi pi-book',
                command: (event) => {
                    //event.originalEvent: Browser event
                    //vent.item: menuitem metadata
                    this.router.navigateByUrl('/home');
                }
            }
        ];
          
        }
        console.log(this.isAuthenticated())
    let user: User = {username: 'Djali', password: 'passer1234'};
    user.username = 'tester';
    user.password = 'passera';
    this.expToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM3NDA5MDE3LCJpYXQiOjE2Mzc0MDg3MTcsImp0aSI6IjYzZmY4MWVlMzNlYzRlMzI4YzEyYzNiMDJiYTRlZWY1IiwiaWQiOjJ9.NE8NhZbZyulHQJFaJERCtgCxIk52d7gErLLwXm3qalA';
    this.userService.login(user).subscribe( data => {
      console.log(data);
      this.userService.getUser(this.jwtHelper.decodeToken(this.expToken).user_id || 0).subscribe( user => {
        console.log(user);
      }, error => {
        console.error(error);
      })
    }, error => {
      console.error(error);
    })
    this.GetTokenDecoded();
    this.getTokenExpirationDate();
  }
  GetTokenDecoded() {
    console.log(this.jwtHelper.decodeToken(this.expToken))
    this.tokenPayload = JSON.stringify(this.jwtHelper.decodeToken(this.expToken));
  }
  getTokenExpirationDate() {
    this.expirationDate = this.jwtHelper.getTokenExpirationDate(this.expToken);
  }
  isAuthenticated(): boolean {
    return !this.jwtHelper.isTokenExpired(this.expToken);
  }
}
