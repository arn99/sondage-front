import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {StepsModule} from 'primeng/steps';
import { AppComponent } from './app.component';
import {MenuModule} from 'primeng/menu';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { MenubarModule } from 'primeng/menubar';
import { AppRoutingModule } from './app-routing.module';
import {CheckboxModule} from 'primeng/checkbox';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { EnqueteComponent } from './enquete/enquete.component';
import {CardModule} from 'primeng/card';
import { TableModule } from "primeng/table";
import { HttpClientModule } from '@angular/common/http';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { WelcomComponent } from './welcom/welcom.component';
import { LayoutComponent } from './layout/layout.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import {PasswordModule} from 'primeng/password';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EnqueteComponent,
    QuestionnaireComponent,
    WelcomComponent,
    LayoutComponent,
    ThankYouComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BreadcrumbModule,
    FormsModule,
    PasswordModule,
    MessagesModule,
    StepsModule,
    MenuModule,
    MenubarModule,
    TableModule,
    InputTextModule,
    CardModule,
		CheckboxModule,
		RadioButtonModule,
    MessageModule,
		InputTextareaModule,
    ButtonModule,
    HttpClientModule,
    AppRoutingModule
    
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [{provide: JWT_OPTIONS, useValue: JWT_OPTIONS }, JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
