import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { Routes , RouterModule }  from '@angular/router';
import {UserService} from  './services/user.service';


const RouterConfig: Routes = [
  {"path":"","component":LoginComponent},
  {"path":"home","component": HomeComponent},
  {"path":"login","component": LoginComponent},
  // {"path":"**","component": VistaErrorComponent},
  ]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(RouterConfig, {useHash:true})
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
