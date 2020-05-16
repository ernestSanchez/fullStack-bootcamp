import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VistaUnoComponent } from './vista-uno/vista-uno.component';
import { VistaDosComponent } from './vista-dos/vista-dos.component';
import { VistaTresComponent } from './vista-tres/vista-tres.component';
import { Routes , RouterModule }  from '@angular/router';
import { ProductoComponent } from './producto/producto.component';


const RouterConfig: Routes = [
{"path":"","component":VistaUnoComponent},
{"path":"home","component": VistaUnoComponent},
{"path":"pricing","component": VistaDosComponent},
{"path":"detalle/:nombreProducto","component": ProductoComponent},//<-----"path":"detalle/:nombreProducto" es el que cambiara la variable
{"path":"**","component": VistaTresComponent},
                                             
]

@NgModule({
  declarations: [
    AppComponent,
    VistaUnoComponent,
    VistaDosComponent,
    VistaTresComponent,
    ProductoComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(RouterConfig, {useHash:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
