import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'estructura';

  formData = {"username":"","password":""}

  submitData(){
   console.log(this.formData)
   alert("Datos enviados!")
  }
}
