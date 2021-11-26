import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { PasswordModule } from 'primeng/password';
import { RadioButtonModule } from 'primeng/radiobutton';
import { StepsModule } from 'primeng/steps';
import { TableModule } from 'primeng/table';
import {AvatarModule} from 'primeng/avatar';
import {ToastModule} from 'primeng/toast';
@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    BreadcrumbModule,
    AvatarModule,
    ToastModule,
    FormsModule,
    PasswordModule,
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
    LoginRoutingModule
  ]
})
export class LoginModule { }
