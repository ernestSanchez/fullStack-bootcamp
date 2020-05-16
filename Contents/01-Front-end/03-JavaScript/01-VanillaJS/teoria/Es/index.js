

//versionado semantico.  mayor/minor/parches = 4.3.2

// ECMAscript o ES hablamos de javaScript.
//las versiones de javascript se llaman ES y el numero de version ej=   ES6

//https://www.ecma-international.org/ para ver las versiones.

// ES6 del 2015 es la version con mas cambios de la historia.

//new siempre significa instanciar

//PARA COMPROBAR SI ESTAN PUESTAS EN LOS NAVEGADORES LAS NUEVAS FUNCIONES .https://caniuse.com/#search=fromEntries

//1-PARAMETROS POR DEFECTO EN LAS FUNCIONES.
                //puedes darle en una definicion darle un valor por defecto.
                        //ej:
                        
                        // function hola(persona=`jose`){
                        //         alert("hola"+persona)
                        // }
                      //  saldra por defecto jose 


//2-template literals.

//3- forEach.

let alumnos = ["Adolfo","jose","Alberto","Julio"]

alumnos.forEach((alumno) => {if (alumno[0] === `A`){console.log(alumno)}})


 //4-bucle for of /for in.

               // ej: for of /para array
                
                let array = ["peras","manzanas","platanos"]
                
                for (element of array){
                        console.log(element)}  ///reitera directamente con los elementos que hay en un array.

                 // ej: for in /para objetos.

                 for (clave in {"nombre":"ernesto","ocupacion":"estudiante"} ){
                       
                        console.log(clave)
                 }

//5-promesa: es una nueva forma de controlar la sincronocidad.(ES UN DATO QUE TE DEVUELVE UNA FUNCION ASINCRONA EN EL INSTANTE QUE SE EJECUTA).

                        //  https://developers.google.com/web/fundamentals/primers/promises?hl=es 


//6-spread opereitor : se usa para separar todos los elemntos de un array ...array

                        //eje: 
                        
                        let parts = [`shoulder`,`kness`];

                        let lyrics =[`head`,`and`,`toes`, ...parts ];
                       

//7-funcion flecha  () => {} sustituye a la anonima y mantiene el contexto del this./tiene un syntax distinta y aparece en ES6

                 //tambien mirar this.

                 
//8-arrayDesturcturing/objectDesturcturing

                //en array
                 
                let miArray = [`xiaomi`,`marron`]

                let [movil,cartera] = miArray;

                //en objeto 

                 let respuestaApi = {"djsaodjf":"fkpfk","data":"datos","nextData":"siguientes datos"};
                
                let {data,nextData} = respuestaApi;



//9-modulos de software.

                //modulos: piezas de codigo repartidas en diferentes archivos

                //https://www.freecodecamp.org/news/how-to-use-es6-modules-and-why-theyre-important-a9b20b480773/

                export {nombreFuncion};

                import {nombreFuncion} from `./....`


                //en Html 
                // <script type "module" src="index.js"></script>
                // <script type "module" src="funciones.js"></script>


//10-classe : es una plantilla para crear objetos.

                        //ej: 

                        class Edificio {        //<----------- plantilla
                                color = "";
                                tamaño = 0;
                        
                        constructor(argumentoColor,argumentoTmaño){  //<-----es una funcion que se ejecuta instantaneamente cada vez que se instancia las classe.(y se usa para poner datos a la classe)     
                                this.color = argumentoColor;
                                this.tamaño = argumentoTmaño;
                                }

                        destruir(){
                                this.color = "";
                                this.tamaño = 0; 
                        }
                        
                        }


                const piso = new Edificio("color",1000) 
                                //           \     / 
                                //todo lo que se colocoa entre paraentesis va a parar al constructor

                piso.destruir()//me los pondra a cero 




        class Oficina extends Edificio{  //para modificar una clase creo una nueva para modificar la anterior extens para eso.a la hora de referneciar sera la ultima creada 
                salas = 4 

                constructor(){
                        super()
                }
        }

//recla encapsulacion : un recla nos dice que no tendriamos que modificar las propiedades de un obj sin usar la clase 


//herencia propiedad de una clase que extiende otra por la cual que obtine las propiedades de otra.


//polimorfismo cambiar con una segunda funcion la primera con el super

//paradigmas 