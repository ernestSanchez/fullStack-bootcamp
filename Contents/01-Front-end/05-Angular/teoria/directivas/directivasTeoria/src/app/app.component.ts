import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // debeMostrarse: boolean = true;

  // toggle(){
  //   this.debeMostrarse = !this.debeMostrarse; //la variable siempre sera la contraria es un switch
  // }
// libros:string[] = [
//   "el señor de los anillos",
//   "el don de la lluvia",
//   "el principito",
//   "el nombre de la rosa"
// ]

// eliminarUltimoLibro(){
//   this.libros.pop()
// }
// revertirlista(){
//   this.libros.reverse()
// }

// addLibro(){
//  let newLibro:string = (<HTMLInputElement>document.querySelector('.libroUsuario')).value
//   this.libros.push(newLibro)
// }
// estilos:object ={
//   "color":"red",
//   "font-weight":"bold"
//   }

// cambiarColor(){
//   this.estilos["color"]="blue";
// }

// replaceColorUser(){
//    let newColor:string = (<HTMLInputElement>document.querySelector('.userColor')).value
//    this.estilos["color"] = newColor
//   //moficar objecto primero seleccionamos el atributo del obj y luego le asignamos el nuevo valor
//   }

// misClasses:string[] = [
//   "btn",
//   "btn-primary"
// ]

// cambiarClases(){
//   this.misClasses.pop()
// }

newClasses:string[] = [
  "alert","alert-secondary",

  ]
  changeColorOne(){
    this.newClasses[1] = "alert-success";
  }
  changeColorTwo(){
    this.newClasses[1] = "alert-danger";
  }
  changeColorThree(){
    this.newClasses[1] = "alert-warning";
  }


}
