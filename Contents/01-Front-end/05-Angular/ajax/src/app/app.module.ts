import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AjaxComponent } from './ajax/ajax.component';
import {Routes,RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import{ HttpClientModule } from '@angular/common/http'

const RouterConfig = [
  {"path":"","component": AjaxComponent},
  {"path":"home","component": AjaxComponent,}
]

@NgModule({
  declarations: [
    AppComponent,
    AjaxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(RouterConfig, {useHash:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
