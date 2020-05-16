import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cuenta:number =1; 

incrementar(){
  this.cuenta++;
  }
  decrementar(){
    this.cuenta--;
  if(this.cuenta -= -1){
  
  }
}
}

