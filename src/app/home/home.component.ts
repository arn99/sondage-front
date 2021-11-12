import { EnqueteService } from './../service/enquete.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Enquete } from '../models/Enquete';
import { SessionService } from '../service/session.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  enquetes: Enquete[] = [];
  constructor(private router: Router, private enqueteService: EnqueteService, private sessionService: SessionService) { }
  ngOnInit() {
    this.enqueteService.getEnquetes().subscribe( enquetes => {
      this.enquetes = enquetes;
    })
  }

  select(item: Enquete) {
    this.sessionService.setItem('enquete', item)
    this.router.navigateByUrl('/enquete');
  }
}
