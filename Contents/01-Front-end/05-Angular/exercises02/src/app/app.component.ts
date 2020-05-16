import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  movies:object = {pulpfiction : "https://pics.filmaffinity.com/Pulp_Fiction-210382116-mmed.jpg",
                  Requiemporunsueño: "https://cdn.culturagenial.com/es/imagenes/requiem.jpg",
                  ciudadDeDios: "https://images-na.ssl-images-amazon.com/images/I/81z-rVy1sGL._SL1441_.jpg",
                  MrNowBody: "https://images-na.ssl-images-amazon.com/images/I/91WY2zIvzzL._SL1500_.jpg",
                  efectoMariposa: "https://pics.filmaffinity.com/El_efecto_mariposa-170060593-large.jpg"
                }
  
  
  
  image:string = ` `
   
  
  print(name:string) {
    
     this.image = this.movies[name]

    }
  
  
}
