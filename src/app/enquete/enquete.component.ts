import { Enquete } from './../models/Enquete';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnqueteService } from '../service/enquete.service';

@Component({
  selector: 'app-enquete',
  templateUrl: './enquete.component.html',
  styleUrls: ['./enquete.component.css'],
})
export class EnqueteComponent implements OnInit {
  selectedState: any = null;
    
        states: any[] = [
            {name: 'Arizona', code: 'Arizona'},
            {name: 'California', value: 'California'},
            {name: 'Florida', code: 'Florida'},
            {name: 'Ohio', code: 'Ohio'},
            {name: 'Washington', code: 'Washington'}
        ];
    
        cities1: any[] = [];
        
        cities2: any[] = [];
        
        city1:any = null;
    
        city2:any = null;
        enquetes: Enquete = {};
        userResponse: any[] = [];
        selectedCategory: any = null;
        questions: any;
        codeCommercial: string = '';
        categories: any[] = [{name: 'Accounting', key: 'A'}, {name: 'Marketing', key: 'M'}, {name: 'Production', key: 'P'}, {name: 'Research', key: 'R'}];
  constructor(private enqueteService: EnqueteService, private router: Router) { }

  ngOnInit(): void {
    this.enqueteService.getEnquete().subscribe( vale => {
      console.log(vale);
      this.questions = vale.question;
      this.enquetes = vale;
    }, error => {
      console.error(error);
      
    })
  }
  valider() {
    console.log(this.userResponse[0])
    const customer = Date.now()
    for (let index = 0; index < this.questions.length; index++) {
      const element = this.questions[index];
      const data = {'code_commercial': this.codeCommercial, 'date_created': this.convertDate(),'questions': element.id, 'responses': this.userResponse[index], "customer": customer };
      this.enqueteService.postQuestionnaire(data).subscribe( vale => {
        console.log(vale);
      }, error => {
        console.log(data);
        console.error(error);
        
      })
      
    }
    this.questions.forEach((element: { id: any; }) => {
    });
    //this.router.navigateByUrl('/home');
  }

  convertDate() {
    const date = new Date();
    if (date) {
      const year = date.getFullYear();
      const day = date.getDate();
      let month: string = (date.getMonth() + 1).toString();
      if (Number.parseInt(month) <= 9) {
        month = '0' + month;
      }
      return [year, month, day].join('-');
    } else {
      return null;
    }
  }
}
