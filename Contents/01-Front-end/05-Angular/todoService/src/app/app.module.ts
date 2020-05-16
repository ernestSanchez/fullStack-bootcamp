import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AnadirComponent } from './anadir/anadir.component';
import { TareasComponent } from './tareas/tareas.component';
import { Routes , RouterModule }  from '@angular/router';

const RouterConfig: Routes = [
  {"path":"","component":AnadirComponent},
  {"path":"home","component": AnadirComponent },
  {"path":"/:indice","component": TareasComponent},
  // {"path":"**","component": ErrorComponent},
                                               
  ]

@NgModule({
  declarations: [
    AppComponent,
    AnadirComponent,
    TareasComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(RouterConfig, {useHash:true})],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
