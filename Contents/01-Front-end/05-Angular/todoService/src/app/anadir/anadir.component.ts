import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anadir',
  templateUrl: './anadir.component.html',
  styleUrls: ['./anadir.component.css']
})
export class AnadirComponent {


 addItems:string [] = []
 
userInfo(){
  
  let addInfo:string = (<HTMLInputElement>document.querySelector('.userInfo')).value
  this.addItems.push(addInfo)
}
  
  constructor() { }

  

}
