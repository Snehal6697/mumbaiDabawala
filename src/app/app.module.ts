import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import {FormGroup} from '@angular/forms'
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { ServicesComponent } from './services/services.component';
import { HomeimageComponent } from './homeimage/homeimage.component';
import { DabbaserviceComponent } from './dabbaservice/dabbaservice.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ErrorpageComponent,
    HomeComponent,
    LogoutComponent,
    ServicesComponent,
    HomeimageComponent,
    DabbaserviceComponent,
    ForgotpasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
