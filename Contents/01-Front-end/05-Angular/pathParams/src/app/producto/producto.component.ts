import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router'; //<------ importamos un servicio 


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent  {

  indice: string = ""; 

  datosLibros:object[] = [
    {"titulo": "Caperucita","precio":"5€"},
    {"titulo": "JavaSript for Dummies","precio":"20€"},
    {"titulo": "Blancanieves","precio":"8€"},
  ]

  constructor(public _route : ActivatedRoute) { 
   this.indice = _route.snapshot.params["nombreProducto"]; //<---------------esta instruccion coge la variable del path params y crea un objeto con el nombre del pathParam y dentro pone lo que escribes en url
  }                      //<------ la manera de integrar el servicio al componente

  

}
