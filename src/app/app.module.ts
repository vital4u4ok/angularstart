import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }  from '@angular/router';

import { AppComponent }  from './app.component';
import {LoginComponent} from "./login/login.component";
import {HttpModule} from "@angular/http";
import {LoginService} from "./login/login.service";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports:      [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
      }
    ])
  ],
  declarations: [ AppComponent, LoginComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
    LoginService
  ],
})
export class AppModule { }
