import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Routes , RouterModule }  from '@angular/router';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { CancionComponent } from './cancion/cancion.component';
import { ErrorComponent } from './error/error.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DataService } from './services/data.service';
import { SidebarComponent } from './sidebar/sidebar.component';



const RouterConfig: Routes = [
  {"path":"","component":CatalogoComponent},
  {"path":"home","component": CatalogoComponent },
  {"path":"cancion/:indice","component": CancionComponent},
  {"path":"**","component": ErrorComponent},
                                               
  ]

@NgModule({
  declarations: [
    AppComponent,
    CatalogoComponent,
    CancionComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(RouterConfig, {useHash:true})
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
