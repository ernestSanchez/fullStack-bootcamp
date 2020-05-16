import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'; 
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-cancion',
  templateUrl: './cancion.component.html',
  styleUrls: ['./cancion.component.css']
})
export class CancionComponent  {

  indiceCancion: string = ""; 

  dataSong:object[] = this._data.getDataSong();
 
  constructor(public _route : ActivatedRoute, public _data : DataService) {
    
    this.indiceCancion = _route.snapshot.params["indice"]
   }

 
}
