import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Routes , RouterModule }  from '@angular/router';
import { PircingComponent } from './pircing/pircing.component';
import { AreaClientesComponent } from './area-clientes/area-clientes.component';
import { Error404Component } from './error404/error404.component';



const RouterConfig: Routes = [
  {"path":"","component":HomeComponent},
  {"path":"home","component": HomeComponent},
  {"path":"pricing","component": PircingComponent},
  {"path":"clients","component": AreaClientesComponent},
  {"path":"**","component": Error404Component},
  ]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PircingComponent,
    AreaClientesComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(RouterConfig, {useHash:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
