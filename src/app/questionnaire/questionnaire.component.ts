import { EnqueteService } from './../service/enquete.service';
import { QuestionnaireService } from './../service/questionnaire.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Enquete } from '../models/Enquete';
import { SessionService } from '../service/session.service';
import { Questionnaire } from '../models/questionnaire';
import * as saveAs from 'file-saver';
@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  items: MenuItem[] = [];
  questionnaires: any[] = [];
  selectedEnquetes: Enquete[] = [];
  cols: any[] = [];
  exportColumns: any[] = [];
  constructor(private router: Router,private enqueteService: EnqueteService, private questionnaireService: QuestionnaireService, private sessionService: SessionService) { }

  ngOnInit() {
    const enqueteId = this.sessionService.getItem('enquete').id;
    this.enqueteService.getEnqueteById(enqueteId).subscribe(data => {
      data.question?.forEach(element => {
        this.cols.push({ field: element.body, header: element.body.toUpperCase() })
      });
    }, error => {
      console.error(error);
      
    });
    this.questionnaireService.getQuestionnaire(enqueteId).subscribe(data => {
      console.error(this.groupByt(data, 'customer'));
      this.questionnaires = [];
      let _question: any[] = []
      let groupQuestion: any[] = []
      this.cols.forEach(element => {
        _question.push(Object.values(element)[0]);
      });
      let arrayEl: any = {};
      //console.log(groupQuestion);
      groupQuestion = this.groupByt(data, 'customer');
      Object.keys(groupQuestion).forEach(element => {
        if (Number.parseInt(element)>1) {
          console.log(element, groupQuestion[Number.parseInt(element)])
          groupQuestion[Number.parseInt(element)].forEach((elt: any) => {
            arrayEl[elt.questions.body] = elt.questions?.response.find( (x: { id: any; }) => x.id === elt.responses)?.choice;
          });
          
        }
        
        console.log(arrayEl);
        this.questionnaires.push(
          arrayEl
        )
        arrayEl = {};
        /*  this.categoryData.push({
          category: element,
          number: categoryList[element].length
        }); */
      });
      for (let i = 0; i < _question.length; i++) {
      }
      /* _question.forEach(elt => {
        data.forEach(element => {
          let questRest = {[elt]: element.questions?.response.find( (x: { id: any; }) => x.id === element.responses)?.choice};
          /* this.questionnaires.push(
            questRest
          ) 
        });
        
      }); */
      console.error(this.questionnaires);
      
    }, error => {
      console.error(error);
      
    });


    this.exportColumns = this.cols.map(col => ({
      title: col.header,
      dataKey: col.field
    }));
  }

  exportExcel() {
    import('xlsx').then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.questionnaires);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ["data"] };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: "xlsx",
        type: "array"
      });
      this.saveAsExcelFile(excelBuffer, "enquetes");
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
      let EXCEL_TYPE =
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
      let EXCEL_EXTENSION = ".xlsx";
      const data: Blob = new Blob([buffer], {
        type: EXCEL_TYPE
      });
      saveAs.saveAs(
        data,
        fileName + "_export_" + new Date().getTime() + EXCEL_EXTENSION
      );
  }
  groupByt = function (array: any, key:string) {
    return array.reduce(function (prev:any, next:any) {
      (prev[next[key]] = prev[next[key]] || []).push(next);
      return prev;
    }, {});
  };
}
