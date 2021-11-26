import { EnqueteService } from './../service/enquete.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Enquete } from '../models/Enquete';
import { SessionService } from '../service/session.service';
import { MessageService } from 'primeng/api';
import { isNgTemplate } from '@angular/compiler';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MessageService]
})
export class HomeComponent implements OnInit {
  enquetes: Enquete[] = [];
  constructor(private router: Router, private messageService: MessageService, private enqueteService: EnqueteService, private sessionService: SessionService) { }
  ngOnInit() {
    this.enqueteService.getEnquetes().subscribe( enquetes => {
      this.enquetes = enquetes;
    })
  }

  select(item: Enquete) {
    this.sessionService.setItem('enquete', item)
    //this.router.navigateByUrl('/enquete');
    this.router.navigateByUrl('/questionnaire');
  }
  copy(enquete: any) {
    console.log(location.origin)
    this.messageService.add({severity:'success', summary:'Partagez le lien suivant :', detail:location.origin + '/enquete/' + enquete.id});
   
  }
}
