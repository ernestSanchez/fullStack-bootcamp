



//////angular : es un framework de front-end (framework de google que realiza una mezcla de arquitectura de componentes modelo visata controladorpara abstraernos del dom.)

///framework : es una herramienta para hacer single page applications.(SPA)
//nos abstrai (ahorrar) de manipular el dom en una SPA.este llego mas o menos en el 2010

//(SPA)single page applications: es una aplicacion web que costa de una sola pagina web

//vista:cada vez que se manipula el dom de html en vez de actualizar la pagina.

//data blindig:la manera de asociar de typeScript a html.

//programacion funcional  prodramacion 

//ANGULAR JS (google) 2010. (LTS)long temp support:soporte vital la relacion de un soporte que llevara años.(30 DE JUNIO 2021 CADUCARA)
//-arqiuitectura de software:es un plano de las relaciones de todas las partes generales del software.
        //(MVC)modelo vista controlador entre el 2000/2010 era la mas usada.angular fue creado con esta arquitectura.

//REACT (facebook) 2013
    //-funciona con arquitectura de componentes:divide la web en bloques funcionales.


//ANGULAR o ANGULAR2 (2015) esta es la version que salio luego del angular js
        //Lo reicieron de 0 para contrarestar a facebook.

        //RETROCOMPABILIDAD:la caracteristica de un software para ser compatible con las versiones anteriores


//Node Js es un software que permite interpretar js sin navegador.

//node package es el gestor de librerias de node 
//(npm)instalador de librerias de node
//angular es una libreria de node.

//angular CLI:ES DE TODAS LAS PARTES DE ANGULAR EL CEREBRO LA QUE CONTROLA TODAS LAS DEMAS.(LIBRERIA PRINCIPAL).para controlar angular.

//en consola CMD:

        //npm es el gestor de librerias

        //npm install recuperar todo node moduls

 //manera de descargar e instalar una libreria primero vamos a https://www.npmjs.com/ para buscarla  luego buscamos el instalador para la consola y se aplica     
        

        //en cmd para crear un proyecto nuevo con angular: ng new nombre proyecto
        //code . para abrir el proyecto con el visual.
        //ng serve (nos crea un pequeño servidor en en local,compila y nos bundeliza. necesario para empezar a trabajar)
        //bundle/bundelizar. :consiste cuando tienes varios archivos los unes en uno cuando unes todos los archivos ts en uno.(es como un merge)
        //type script (.ts)es un nuevo lenguaje de programacion con typado casi identico a js . angular funciona con el.
        //compilar traducir de un codigo a o otro de ts a js

                    //orden correcto programar en ts como fuente y luego compilaremos a js

////////TYPESCRIPT

//tipos type script:
                //ejemplo 
                        //let año:number = 1 ; asi le das un tipo de numero a la variable.
                        //let año:string
                        //let año:boolean
                        //let año:object
                        //let año:undefined
//los mismos que javascript mas un par mas. 
    //las dos especificas son array/tupla,any
                         //let año:string
                        //let año:bolean
                        //let año:object
                        //let año:undefined
                        //let año:void //void es nada
     
// ARRAY es de longitud indefinida y un solo tipo de datos

        //  let miArray:string[] = ["hola","mundo"]
        
        //  let miArray2:number[] = [1,2,3,4]

// TUPLA  es como una arrary de varios tipos de datos pero tiene que ser  limitada
        //  let miArray3:[string,number] = ["hola",2]

//ANY

    //let emergencia:any; es para cualquier tipo de dato

///// LUGARES DONDE HAY QUE PONER TIPOS
                    
                    //-variables  
                            //ejemplo  let nombre:string;
                   
                    //-argumentos de las funciones
                            // function saludar(nombre:string) {
                        
                            // }

                    //-funciones.

                            //  function sumar(num1:number,num2:number):number {
                            //     let resultado:number = num1 + num2;
                            //     return resultado;
                            // }


////////data binding:enlazamiento de datos

        // en html:
            // <!-- data binding enlaze directo de datos-->
            // <h1>{{nombre de la variable}}</h1>
            
            // <!-- (evento)="funcion()" para crear un evento y llamar a la funcion desde el ts--> 
            // <button (click)="incrementar()">incrementar</button>


/////babel(es un transpirador). es la principal herramienta que se utiliza para transpirar (compilar lenguajes del mismo nivel)

////webpack sirve para boundelizar.


///////////////////////////////// dia 02 /////////////////////////////////////////////////////////////////////////

////////////////////// componentes 

//arquitecturas:

///gernerar arquitectura de software es crear los planos generales del software.


///////////////////////////////////////////// MVC.modelo visata controlador./////////////////////////////////////////////

/////el esquema lo podremos diseccionar en 3 partes.


///1-vista: interface un componente que constituye en toda la parte visible de la aplicacion.


//2-modelo es crear una estructura de datos donde guardarlos, en un contenedor normalmente es una clase.


//3-controlador es el codigo que controla las otras partes (las enlaza es el cerebro que hace que interactuen entre ellas)



///////////////////////////////////////////// arquitectura de componentes /////////////////////////////////////////////

////coger una aplicacion muy grande y dividirla en pequeñas partes funcionales y cada parte se autogestiona,es autonoma de los demas.


//router: es un modulo en el que estan configuradas todas las rutas que son asociaciones entre una vista y una url


/////////////////////// angular funciona con las dos y el orden es gerarquico /////////////////////////////





 //                                   MODULE <----es elmento/instancia que esta por encima de toda la aplicacion/estructura de componentes,el pegamento de app
//                                      |
///                                  app root  o  (app component,root component)
//                                      /\ 
//                               <router outlet>
 //                                    /  \
  //                     --------------------------------
 //                      |               |               |
//                       |               |               |
//             [ view comopent 1     view comopent 2   view comopent 3 ] <----vista es toda un seccion de una aplicacion que contruye una interface completa
//                     /\
//      ------------------------
//      |           |          |
//  [ navbar      grid      footer ] <---componetes de bajo nivel
//                  |   
//                cards     

//////////////////////////////////

//polyfills simula una funcion en un navegador.(para compativilidad).son librerias que añaden a un navegar una funcionalidad que no tienen.

//enviroment conjunto de variables que cambiaran en conjucion dependiendo de si estas trabando en desarrollo o produccion.

//assets: es donde va todo el contenido multimedia.

//main es el que va antes de subir al root.

//app.modules


/////////app.modules.ts

                // @NgModule({  <-----decorador es como un inner siempre para aplicarlo debajo. en este caso ira   AppModule
                //         declarations: [  <--------todos los nombres de los componentes de la aplicacion en forma de array
                //           AppComponent                                                       
                //         ],
                //         imports: [        <-------- un listado de otros modulos externos (ejemplo de otra aplicacion)que usara el modulo
                //           BrowserModule
                //         ],
                //         providers: [],  <-------- listado de todos los servicios del modulo(dumpa-dumpas)
                //         bootstrap: [AppComponent] <-------- arrancar iniciar el nombre del primer componente de todos el app root(el primer componente que se va a arrancar)
                //       })


                //export class AppModule { }

//////para crear componentes en cmd 
                        ////ng generate component nombre componente.



//////////////////////////////////    directivas    //////////////////////////////////////////////////////////////

/////////////////que son?:son propiedades especiales de html que solo existen en Angular para manipular el dom 

//////////////se divden en 2 tipos:

///////////////////// directivas estructurales : permiten manipular o cambiar la estructura del html.////////////////////

// *ngIf="" : sirve para mostrar o ocultar un elemento ej: 

                        // en html                              

                               //<h1 *ngIf="debeMostrarse">Hola mundo</h1>                      

                                //<button (click)="ocultar()">Ocultar texto</button>                      

                //en app.componets.ts


                                // @Component({
                                //         selector: 'app-root',
                                //         templateUrl: './app.component.html',
                                //         styleUrls: ['./app.component.css']
                                //       })
                                //       export class AppComponent {
                                //         debeMostrarse: boolean = true;
                                
                                //         ocultar(){
                                //           this.debeMostrarse = false;
                                //         }
                                //       }
      

// * ngfor="" : va a crear muchos elementos en bucle

//routerLink es una directiva estructural para enlazar las vistas (solo cuando tenemos el ruter)

////////////////////////////////////    directivas de atributo  /////////////////////////////////////////////////////////

////// directivas de atributo : modifican un elemento ya existente.(para añadir estilos)

// [ngStyle]=""


/* <p [ngStyle]="estilos">Adios mundo</p>

Escribe un color; <input class="userColor" type="color">

<button (click)="replaceColorUser()">cambiar color</button>
*/

//////////////////////////////

// estilos:object ={
//         "color":"red",
//         "font-weight":"bold"
//         }
      
//       // cambiarColor(){
//       //   this.estilos["color"]="blue";
//       // }
      
//       replaceColorUser(){
//          let newColor:string = (<HTMLInputElement>document.querySelector('.userColor')).value
//          this.estilos["color"] = newColor
//         //moficar objecto primero seleccionamos el atributo del obj y luego le asignamos el nuevo valor
//         }
//       }


//[ngClass]=""

/* <div [ngClass]=newClasses role="alert">A simple secondary alert—check it out!</div>

<button (click)="changeColorOne()">color one</button>
<button (click)="changeColorTwo()">color two</button>
<button (click)="changeColorThree()">color three</button> */

///////////////////////////////

// newClasses:string[] = [
//         "alert","alert-secondary",
      
//         ]
//         changeColorOne(){
//           this.newClasses[1] = "alert-success";
//         }
//         changeColorTwo(){
//           this.newClasses[1] = "alert-danger";
//         }
//         changeColorThree(){
//           this.newClasses[1] = "alert-warning";
//         }
      
      
//       }

//////////////////////////////////////////////////////////// routing Angular //////////////////////////////////////////////////////////////////

///////////////////////////////// routing para asociar urls a diferentes vistas .

////////////////pasos: 
                //-1- necesito importar un modulo externo a nuestro modulo (modulo de routing de Angular)
                               // en app.modules.ts pondremos :
                                        //import { Routes , RouterModule }  from '@angular/router';
//                                                  \|/
                // [es un tipo de dato. para crear la configuracion del router]
                                        
                                        //crearemos una variable para enlazar y creamos la configuracion
                                                // const RouterConfig: Routes = [
                                                        // {"path":"","component":VistaUnoComponent}, //componente por defecto que saldra por defecto
                                                        //{"path":"home","component": VistaUnoComponent},//poner nombre con el path // component asociar componente (nombre componente)
                                                        // {"path":"pricing","component": VistaDosComponent}
                                                        //{"path":"**","component": VistaDosComponent},//en el pat es si escriben cualquier cosa que no tenga enlazado en la web.
                                                                                                        //en component abria que poner la vista error 404 la pondremos siempre al final la ultima
                                                        // ]

                                        //-2 paso :
                                        
                                        // @NgModule({
                                        //   declarations: [
                                        //         AppComponent,
                                        //         VistaUnoComponent,
                                        //         VistaDosComponent,
                                        //       ],
                                        //       imports: [
                                        //         BrowserModule,
                                        //          RouterModule.forRoot(RouterConfig, {useHash:true}) <--------añadimos el RouterModule y la funcion para llamar a la configuracion
                                        //       ],                                         \/
                                                                         //   para trampear al server y no haga el routing a esto lo llamamos hash estragi
                                        //       providers: [],
                                        //       bootstrap: [AppComponent]
                                        //     })
                                        //     export class AppModule { }
                                        
                                        //-3 luego en el app.component.en el html ponemos el tag <router-outlet></router-outlet>

//en el html 
        //<a  [routerLink]="/pricing" class="navbar-brand d-flex align-items-center">
//con corchetes para mandar varios links
//routerLink es una directiva estructural para enlazar las vistas
        //<a  routerLink="/pricing" class="navbar-brand d-flex align-items-center">
//sin corchetes para llamar a un link
                                                

//////////////////// ciclo de la vida del componente (component live cicle)/////////////////

//ng onInit es cuando un componente se crea la primera fase
//after content init




/////////////////// path params ////////////////////////

//una parte de la url que cambia y le da informacion extra al componente que esta asociado

//{"path":"detalle/:"nombreProducto","component": ProductoComponent},//<-----"path":"detalle/:nombreProducto" es el que cambiara la variable
//                          \/  
//                   es el que cambiara la variable (el que asociaremos)


////servicios un grupo de funciones de un framework en este caso.



///en una classe siempre usar funciones flechas

//oninit es como el constructor lo que es una funcion del ciclo de vida del componente
//costructor es una funcion que se activa al principio

//////////////////////////////////////////////// servicios /////////////////////////////////////////////////////////

//es un archivo de codigo cuya funcion es compartir datos/variables/funciones entre varios componentes
//se utiliza cuando tienes una misma variable en dos componentes distintos

//primer paso: ng generate service services/data <----- para crear un nuevo servicio  nueva carpeta/nombre del servicio
//paso dos: ir a app.modules.ts y declarar el servivcio manualmente en providers[],
//importarlo en el componente que necesito.
//inyeccion de dependencias:
        //lo  inyectamos en el constructor se puede de dos formas publica o privada
        //le damos un nombre dentro del componente luego ponemos su nombre original.ejempo:
                                //  constructor(public _route : ActivatedRoute, public _data : DataService) {}
                                //  constructor(public _route : ActivatedRoute, propiedad public _nombre que le ponemos : nombre Original) {}

        //dentro del servicio pondremos la variable que compartimos y la privatizamos poniendole private delante la variable.
        //por cada variable del servivio hacer 2 funciones la primera se llama get(para obtener datos) la segunda set (para modificar datos)


/////////////////////////// formularios /////////////////////////////////////

//la parte de la aplicacion donde el usuario introduce datos.

//para ver vulnerabilidades en los formularios mirar en owasp top 10 para las medidas standar
//de validar formularios de dorma standart

// hay dos tipos de validacion de formularios 
        //reactivos que la validacion se va a realizar en el ts typeScript
        
        //template-driven se valida en el html(uno a uno todos los inputs tendran unos requisitos mininos
        //el form igual)
                //import {FormsModule} from '@angular/forms'; //<------ poara utilizar los validadores de angular 

//en html <form 
//name="formularioRegistro"<------para que angular lo pueda indentificar
//#miFormulario <---------para indentificarlo yo
//(ngSubmit)="miFormulario.form.valid && submitData()"> <------- evento que se activara al momento que se envie o se aprete el boton...
////(ngSubmit)="nombre que le he dado .donde esta.es una propiedad del angular que es booleano.&& submitData()estamos haciendo un if que si la primera no se cumple la funcion no se ejecuta"> <------- evento que se activara al momento que se envie...
//ahora en cada input la validacion que queremos 
//required es una propiedad en aquellos inputs que sean obligatorios de rellenar

// <form 
//     name="formularioRegistro" 
//     (ngSubmit)="submitData()"
// > 
//     Username:   
//     <input 
//     type="text" 
//     required   <----- para dar que rellenes obligatoriamente
//     name="username" 
//     [(NgModel)]="formData.username"> <-----asocia unidireccionalmente del con el objeto de formData.de un input html y un dato ts(data binding bidireccional)
 //   [NgModel] <---- asi es unidireccional

//<p *ngIf="inputUsername.invalid && inputUsername.touched">el error esta aqui</p> <----- propiedades que se usaran o complementaran cuando no se cumpla los requisitos
//   los estados que le puedes dar a un input a parte del touched hay
// Dirty & Pristine
//Touched & Untouched
//Valid & Invalid             //con todo esto sireve para dar feedback con el ususario de donde esta el error.

//pattern es un validador  como el requiered que comprobara que un input siga una regex
 
 //     <br><br>
//     Password:   <input type="password" required>
//     <button type="submit">Enviar</button>
// </form>



//validacion debil en front-end 
//validacion fuerte en back-end



////////////////////////// llamadas http Angular //////////////////////////////////

//UN observable ES UN TIPO DE "DATO" QUE ES LA EVOLUCION DE UNA PROMESA Y QUE REPRESENTA UN FLUJO DE DATOS

//tenemos que importar un modulo primero para hacer cualquier llamada en Angular 

//1- en component app.modules
import{ HttpClientModule } from '@angular/common/http' //en app.module



//2-
//EN EL COMPONENETE
//servicio que viene dentro de httpclientmodule
//sirve para hacer llamada(http)
import { HttpClient} from '@angular/common/http'

//-para trae headers

import { HttpClient,HttpHeaders} from '@angular/common/http'

//importamos un Observable que es parecido a los callbacks tipo de dato de la respuesta de la llamada 
//es una libreria externa de angular lo unico que hace es controlar los observables
import { Observable } from 'rxjs' 



@Component({
  selector: 'app-ajax',
  templateUrl: './ajax.component.html',
  styleUrls: ['./ajax.component.css']
})

//GET-OBTENER DATOS. delete es lo mismo solo se cambia el get por delete
export class AjaxComponent {

  
        constructor(public _http : HttpClient){
        
        
        
    let httpconfig: object = {
        "headers": new HttpHeaders({"content-type":"aplication/json"})
      }//para empaquetar todos los headers dentro de un obj y pasarlos de argumento a la funcion get
        
        
        //llamada GET 
            _http.get("https://api.chucknorris.io/jokes/random")//ponemos como argumento la url devuelve un observable
            
            //inyectaremos un codigo que se ejecutara cuan la api responda
            .subscribe((responseApi)=>{
              console.log(responseApi)
          })
      
        }
      
      }
      
         
//POST para crear(añadir) se hac0en igual //PUT para actualizar ya existentes
export class AjaxComponent {


      
      
        constructor(public _http : HttpClient){
         //llamada POST estoy añadiendo en el body lo que quiero a una api y me devuelve un id de identificacion
      
         //para empaquetar todos los headers dentro de un obj y pasarlos de argumento a la funcion get
          let httpconfig: object = {
            "headers": new HttpHeaders({"content-type":"aplication/json"})
          }
      
            _http.post("https://reqres.in/api/users",{
              "name": "morpheus",       //<--------PONEMOS EL BODY ANTES DEL HTTPCONFIG
              "job": "leader"
          },httpconfig)//ponemos como argumento la url devuelve un observable
            
            //inyectaremos un codigo que se ejecutara cuan la api responda
            .subscribe((responseApi)=>{
                console.log(responseApi)
          })
      
        }
      
      }
      







//programacion reactiva es un nuevo paradigma de programacion que se basa en uso fundamental de observables para todo.


//el ultimo paso tras crear el proyecto  hay que que hacer un  deploy lanzarlo al mundo
        
                ////deploy <------subir los archivos finales de la aplicacion a un servidor web
  //              ___|___
//               |       |
//           compilado  server
//            (build)


//pasos 
// ng build --prod  <-------build genera la build compila / el --prod <----optimiza el codigo final

        // para subir a github:
//ng build --prod  --base-href /exercise-newsPapers/
//ng build --prod  -para github /nombre repositorio/

//en git coger tosos los archivos finales de dist y ponerlas dentro de la misma luego eliminar la 
// arpeta que tiene el nombre del repo vacia luego cambiar el nombre de la dist por docs 

//al final git add . / git commit -m " " / git push -u origin master