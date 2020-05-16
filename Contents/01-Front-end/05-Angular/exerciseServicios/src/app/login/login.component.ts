import { Component, OnInit } from '@angular/core';
import {UserService} from  '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  

  constructor( public _data: UserService ) { }
 
  login(){
    let userName:string = (<HTMLInputElement>document.querySelector('.userInName')).value
    let passwordUser:number = parseInt((<HTMLInputElement>document.querySelector('.numPasword')).value);
  
    
    this._data.login(userName,passwordUser);
 
  }

}
