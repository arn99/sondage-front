import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Enquete } from '../models/Enquete';
import { Questionnaire } from '../models/questionnaire';

const httpHeaders = {
  headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
  })
};

const apiUrl = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {

  constructor(private http: HttpClient) { }
  postQuestionnaire(data: Questionnaire): Observable<Questionnaire> {
    const url = `${apiUrl}/questionnaire/create`;
    return this.http.post<Questionnaire>(url, data).pipe(
      tap(() => console.log()),
    );
  }
  getQuestionnaire(enqueteId:number): Observable<any[]> {
    const url = `${apiUrl}/questionnaire?expand=questions.inquiry`;
    return this.http.get<any[]>(url)
      .pipe(
        tap(() => console.log()),
      );
  }
}
