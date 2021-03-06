import { ThankYouComponent } from './thank-you/thank-you.component';
import { LayoutComponent } from './layout/layout.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { EnqueteComponent } from './enquete/enquete.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashbord',
    component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'questionnaire', component: QuestionnaireComponent },
      
    ]
  },
  { path: 'enquete/:id', component: EnqueteComponent },
  { path: 'thank-you', component: ThankYouComponent },
  {
    path: '',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
