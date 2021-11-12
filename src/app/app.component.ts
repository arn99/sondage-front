import { EnqueteService } from './service/enquete.service';
import { User } from './models/user';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, PrimeNGConfig } from 'primeng/api';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserService } from './service/user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'sondage';
  items: MenuItem[] = [];
  expToken: any;
  tokenPayload: any;
  expirationDate: any;
  private jwtHelper: JwtHelperService = new JwtHelperService;
    constructor(private primengConfig: PrimeNGConfig, private router: Router, private userService: UserService) {}
    ngOnInit() {
        this.primengConfig.ripple = true;
      this.items = [
        {
            label:'Nouvel enquete',
            icon:'pi pi-plus pi-power-off',
            command: (event) => {
                //event.originalEvent: Browser event
                //vent.item: menuitem metadata
                this.router.navigateByUrl('/home');
            }
        }
    ];
    let user: User = {username: 'Djali', password: 'passer1234'};
    user.username = 'tester';
    user.password = 'passera';
    this.expToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM2NTc3MDM5LCJpYXQiOjE2MzY1NzY3MzksImp0aSI6ImVlNDgxOTE1OGQ1YjQ1NDQ4YWRlNGY1NzM5OGJlOTFjIiwidXNlcl9pZCI6Mn0.zzqsTqMc2WbM7OLhovNMbLMao08V3bvDqWGUvCQyzK4';
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
