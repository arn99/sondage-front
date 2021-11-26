import { Enquete } from './../models/Enquete';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EnqueteService } from '../service/enquete.service';
import { QuestionnaireService } from '../service/questionnaire.service';
import { SessionService } from '../service/session.service';
import { QuestionService } from '../service/question.service';

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
        enquete: Enquete = {};
        userResponse: any[] = [];
        userResponseOther: any[] = [];
        selectedCategory: any = null;
        questions: any;
        codeCommercial: string = '';
        categories: any[] = [{name: 'Accounting', key: 'A'}, {name: 'Marketing', key: 'M'}, {name: 'Production', key: 'P'}, {name: 'Research', key: 'R'}];
        id: string = '1';
  constructor(private questionnaireService: QuestionnaireService,
    private route: ActivatedRoute,
      private questionService: QuestionService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route?.snapshot?.paramMap?.get('id') || '1';
    this.questionService.getQuestion(this.id).subscribe( vale => {
      console.log(vale);
      this.questions = vale.question;
    }, error => {
      console.error(error);
      
    })
  }
  valider() {
    console.log(this.userResponse)
    console.log(this.userResponseOther)
    const customer = Date.now()
    for (let index = 0; index < this.questions.length; index++) {
      const element = this.questions[index];
      const data = {
        'code_commercial': this.codeCommercial,
        'date_created': this.convertDate(),
        'questions': element.id,
        'responses': this.userResponse[index],
        'other': this.userResponseOther[index] || 'none',
        'customer': customer };
        console.log(data)
      this.questionnaireService.postQuestionnaire(data).subscribe( vale => {
        console.log(vale);
        this.questions.forEach((element: { id: any; }) => {
        });
        this.router.navigateByUrl('/thank-you');
      }, error => {
        console.log(data);
        console.error(error);
        
      });
      
    }
    //this.router.navigateByUrl('/questionnaire');
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
