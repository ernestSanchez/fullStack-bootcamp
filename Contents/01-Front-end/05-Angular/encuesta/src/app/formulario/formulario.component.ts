import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent  {

  formData = {}
  
  submitData(){
    console.log(this.formData)
  }
  
  constructor() { }



}
