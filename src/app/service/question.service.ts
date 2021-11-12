import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Enquete } from '../models/Enquete';

const apiUrl = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  getQuestion(enqueteId:number): Observable<Enquete> {
    const url = `${apiUrl}/inquiry/${enqueteId}?fields=id,title,question`;
    return this.http.get<Enquete>(url)
      .pipe(
        tap(() => console.log()),
      );
  }
}
