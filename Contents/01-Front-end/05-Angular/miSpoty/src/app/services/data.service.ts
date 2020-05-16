import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dataSong:object[] = [
    {"artist": "Urge Overkill " ,"titulo": "Girl You'll Be A Woman Soon", "archivo": "/assets/music/Urge Overkill - Girl You'll Be a Woman Soon.mp3","URL": "/cancion/0" ,"image":"/assets/images/over.jpg"},
    {"artist": "The Fugees","titulo": "Ready or Not", "archivo": "/assets/music/The Fugees - Ready or Not.mp3" ,"URL": "/cancion/1","image":"/assets/images/fugges.jpg"},
    {"artist": "Creedence Clearwater","titulo": "Bad Moon Rising", "archivo": "/assets/music/Creedence Clearwater Revival Bad Moon Rising.mp3","URL": "/cancion/2","image":"/assets/images/creedence.jpg"},
    {"artist": "M Clan","titulo": "Las calles están ardiendo ", "archivo": "/assets/music/M Clan - Las calles están ardiendo (con el Drogas Directo Price).mp3","URL": "/cancion/3","image":"/assets/images/mclan-sevilla.jpg"}
  ]

 //sirve para que los componentes obtengan la variable 
getDataSong(){             //<-----------------solo sirve para devolver el valor de la variable
  return this.dataSong 
}

//SIRVE PARA QUE LOS COMPONENTES PEDIR CAMBIARLA
setDataSong(nuevoValor){       // <-----------------creamos una variable para los componentes asi la pueden utilizar 
this.dataSong = nuevoValor;
}

  constructor() { }
}
