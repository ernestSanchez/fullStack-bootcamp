import { Component, OnInit } from '@angular/core';

//servicio que viene dentro de httpclientmodule
//sirve para hacer llamada(http)
import { HttpClient,HttpHeaders} from '@angular/common/http'

//importamos un Observable que es parecido a los callbacks tipo de dato de la respuesta de la llamada 
//es una libreria externa de angular lo unico que hace es controlar los observables
import { Observable } from 'rxjs' 

@Component({
  selector: 'app-ajax',
  templateUrl: './ajax.component.html',
  styleUrls: ['./ajax.component.css']
})
export class AjaxComponent {

  // joke:string = "";


  constructor(public _http : HttpClient){
   //llamada GET 

   //para empaquetar todos los headers dentro de un obj y pasarlos de argumento a la funcion get
    let httpconfig: object = {
      "headers": new HttpHeaders({"content-type":"aplication/json"})
    }

      _http.post("https://reqres.in/api/users",{
        "name": "morpheus",
        "job": "leader"
    },httpconfig)//ponemos como argumento la url devuelve un observable
      
      //inyectaremos un codigo que se ejecutara cuan la api responda
      .subscribe((responseApi)=>{
        console.log(responseApi)
      //  this.joke = responseApi["value"]
    })

  }

}
