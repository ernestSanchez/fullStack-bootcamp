import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VistaHomeComponent } from './vista-home/vista-home.component';
import { VistaLoginComponent } from './vista-login/vista-login.component';
import { VistaCheckComponent } from './vista-check/vista-check.component';
import { VistaErrorComponent } from './vista-error/vista-error.component';
import { Routes , RouterModule }  from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

const RouterConfig: Routes = [
  {"path":"","component":VistaHomeComponent},
  {"path":"home","component": VistaHomeComponent},
  {"path":"login","component": VistaLoginComponent},
  {"path":"check","component": VistaCheckComponent},
  {"path":"**","component": VistaErrorComponent},
  ]


@NgModule({
  declarations: [
    AppComponent,
    VistaHomeComponent,
    VistaLoginComponent,
    VistaCheckComponent,
    VistaErrorComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(RouterConfig, {useHash:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
