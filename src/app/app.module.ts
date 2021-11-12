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
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EnqueteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BreadcrumbModule,
    FormsModule,
    StepsModule,
    MenuModule,
    MenubarModule,
    TableModule,
    InputTextModule,
    CardModule,
		CheckboxModule,
		RadioButtonModule,
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
