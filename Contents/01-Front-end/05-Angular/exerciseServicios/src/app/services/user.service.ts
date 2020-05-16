import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isLogged:boolean = false
  
  userdataDummy: object = {"username": "hola", "password": 1234 }
  

  getDataSong(){             //<-----------------solo sirve para devolver el valor de la variable
    return this.userdataDummy 
  }
  setDataSong(nuevoValor){       // <-----------------creamos una variable para los componentes asi la pueden utilizar 
  this.userdataDummy = nuevoValor;
  }

  
login(userName:string,newPassword:number){
  


  if(userName === this.userdataDummy["username"] && newPassword === this.userdataDummy["password"] ){
    this.isLogged = true;

  }

}

logout(){
  this.isLogged = false;
}


  constructor() { }
}
