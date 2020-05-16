import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count:object = {ernesto:0,adolfo:0,leonardo:0,alejandro:0,diego:0,miguel:0,
    sergio:0,laura:0,alex:0,samuel:0}
   
    msg:string = ""
  
 
incrementar(name:string) {
   this.count[name] ++;
  
}
decrementar(name:string){
  this.count[name] --;
}

resultado(){

  let winner:string = ""
  let puntuacionMaxima:number = 0;

  for (let nombre in this.count){
    let puntuacionUsuario = this.count[nombre]

    if(puntuacionUsuario > puntuacionMaxima ){
      puntuacionMaxima = puntuacionUsuario
      winner = nombre
    }

  }

this.msg = `el ganador es ${winner}`

}


}
