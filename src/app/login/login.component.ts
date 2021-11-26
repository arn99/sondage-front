import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MessageService } from 'primeng/api';
import { User } from '../models/user';
import { SessionService } from '../service/session.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {
  expToken: any;
  tokenPayload: any;
  expirationDate: any;
  username: string = '';
  password: string = '';
  private jwtHelper: JwtHelperService = new JwtHelperService;
  constructor(private router: Router,
    private messageService: MessageService,
    private sessionService: SessionService,
    private userService: UserService) { }

  ngOnInit(): void {
  }


  login() {
    let user: User = {username: this.username, password: this.password};
    user.username = this.username;
    user.password = this.password;
    this.userService.login(user).subscribe( data => {
      this.expToken = data.access;
      this.sessionService.setItem('token', data)
      console.log(this.expToken);
      this.userService.getUser(this.jwtHelper.decodeToken(this.expToken).user_id || 0).subscribe( user => {
        console.log(user);
      }, error => {
        console.error(error);
      })
      this.router.navigateByUrl('/home');
    }, error => {
      this.messageService.add({key: 'tc',severity:'error', summary: 'Error', detail: 'Username ou mot de passe incorrecte'});
      console.error(error);
    })

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
