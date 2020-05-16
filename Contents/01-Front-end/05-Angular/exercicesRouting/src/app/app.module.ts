import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeEsComponent } from './home-es/home-es.component';
import { HomeEnComponent } from './home-en/home-en.component';

import { Routes , RouterModule }  from '@angular/router';

const RouterConfig: Routes = [
  {"path":"","component":HomeEsComponent},
  {"path":"es","component": HomeEsComponent},
  {"path":"en","component": HomeEnComponent},
  // {"path":"check","component": VistaCheckComponent},
  // {"path":"**","component": VistaErrorComponent},
  ]


@NgModule({
  declarations: [
    AppComponent,
    HomeEsComponent,
    HomeEnComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(RouterConfig, {useHash:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
