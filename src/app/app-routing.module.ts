import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { EnqueteComponent } from './enquete/enquete.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'enquete', component: EnqueteComponent },
  { path: 'questionnaire', component: QuestionnaireComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
