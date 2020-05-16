import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VistaUnoComponent } from './vista-uno/vista-uno.component';
import { VistaDosComponent } from './vista-dos/vista-dos.component';
import { VistaTresComponent } from './vista-tres/vista-tres.component';
import { Routes , RouterModule }  from '@angular/router';


const RouterConfig: Routes = [
{"path":"","component":VistaUnoComponent},//componente por defecto que saldra
{"path":"home","component": VistaUnoComponent},//poner nombre con el path // component asociar componente (nombre componente)
{"path":"pricing","component": VistaDosComponent},
{"path":"**","component": VistaTresComponent},//en el pat es si escriben cualquier cosa que no tenga enlazado en la web.en 
                                              //component abria que poner la vista error 404 siempre sera la ultima
]


@NgModule({
  declarations: [
    AppComponent,
    VistaUnoComponent,
    VistaDosComponent,
    VistaTresComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(RouterConfig, {useHash:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
