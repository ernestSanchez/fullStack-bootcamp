// JAVASCRIPT
// EN 19991-aparecio web estetica estructura
// 1995-aparecio  css
// javascript sirve para hacer la web dinamica.
// java .significa cafe. fue creada por Oracle 
// netscape: primer navegador que utilizo javascript.
// sippets:pequeños packs de codigo 
// Brendan Eich creador del JavaScript. primero lo llamaran Mocha luego liveScript hasta el final fue JavaScript. ha creado actualmene un nuevo navegador brave
// ECMA: organizacion eurepea  es quien que controla javascript.
// ECMAscript :es el nombre elegante de javascript 
// logica de la aplicacion: es los pasos que tiene que seguir para transformar los datos de entrada con los de la salida
// Es es las versiones je js=javascript.
// un lenguaje compilado antes de ser ejecutado tiene que interpretarse al lenguaje maquina.
// el lenguaje interpretado no hace falta hay un programa intermediario que lo interpreta y lo 
// ejecuta 
// mutar sirve para reasignar una variable tanto arrays como obetos son mutables.
// caracteristicas javascript:
// 1-scripting:
// 2-interpretado: interprete es un programa que entiende y interpreta el codigo que tu le estas dando y que se lo interpreta al ordenador.

//                                                                                    clasificacion de lenguajese de programacion 
//                                                                                 		          \/
// 						en base de como se ejecutan
// 						\/				\/
// 					     compilados 			interpretados:no tieenen que ser compilados por eso son mas rapidos.
// 					traducir un leguaje                                               \/
// 		        de alto nivel a bajo nivel(codigo machin code).	      lentos en ejecucion 
// 		          el primer lenguaje  medio nivel "esamblado"               rapidos en desarrollo.
// 						\/
// 				        rapidos en ejecucion 
// 				           lentos en desarollo 
// 3-tipado debil (no tipado):para que no sea muy restrictivo.

// poner javascriot en html:
// 				<script>
// 					</script>			o 		<sript src="index.js">
// </script>
// lintear es limpiar codigo el plugin de javascript se llama ESlint (el plugin si se nusca es el linter)
// identar formatear el codigo añadiendo spacios saltos de linea tabulacione
// la variable pequeños espacios de memoria donde guardaremos temporalmente los datos 
// tres formas de guardar variables pre ES6:
// 1-var+space+mas su nombre ej: var actuar (primero siempre declararla ) luego asignar poner un dato dentro.      asignar ej:actuar = 1984       hacer las dos cosas a la vez ej:var actuar = 14984;
// FORMAS NUEVAS post ES6
// let actual = 1984; lo bueneo que no puedo volver a declarar
// const actual = 1984; no se puede ni volver a declarar ni reasignar el valor
// typeof para ver la clase de dato
// flotante numeros flotantes 19.80 los que van con .
// intiger integro 1952258
// operadores un cambio que le haces a una variable ejemplo: actual+1 = resultado. tambien pude hacerse  actual++ operador incremental 
// actual-- decremental
// operador logico de igualacion.(modulo)
// son como las condition
// 15 % 12
// 3
// 15 % 12 == 0
// false
// 15 % 12 > 0
// true
// 15 % 12 < 0
// false
// 15 % 12 <= 0
// false
// 15 % 12 >= 0
// true
// -----------------------------------------------------
// coperador de igualacion con tipò 
// 3 == "3"
// true.
// 0
// 3 === "3"  (recomendable utiilizar)
// false
// string : todo dato que vaya entre comillas.
// parseInt convierte el string en un numero
// LOS BOOLEANOS:
// TIPOS DE DATOS BASICOS DE JAVASCRIPT: BOOLEAN-NUMBER-STRING-UNDEFINED-NULL (PARA GUARDAR COSAS ELEMENTALES)
// TIPOS DE DATOS AVANZADOS CONSTRUCCION DATA TYPE:ARRAY,OBJECT.
// ARRAY
// diferencia entre variable de valor y variable de referencia  
// la de valor es cuando es fija ej.string,numero..      ej:   a = 1 
// 							b = a esta siempre sera 1 aun que cambie el valor de la a.
// la de ref es cuando asignas a una con objeto complejo ej array: a= [1,2]
// 								b=a esta siempre tendra el valor que vaya cambiando.
// ARRY:ES UNA CADENA DE VALORES DISTINTOS TODOS A LA VEZ. 
// EJEMPLO:
// 		let alummnos = ["a","b","c"]
// cambiar un elmento de una array es mutar un array.
// he declarado la variable he reasignado el index del elemento. ej alummnos
// 													alumnos[8] = "caca"

// OBJECT:       


// let adolfo = {"nombre": "adolfo" , "edad" :30, profesion:"estudiante"}
// 		      clave          valor      clave  valor   clave          valor
 


// en cosola de navegador:
// -console.log("") para imprimir en la cosola solo se ve en la consola.
// -document.write("") se ve en hatml en navegador sobrescribe.se lo daremos al usuario 
// -prompt("") para recibir datos de usuario.
// -ejemplo de combinarlos:document.write(prompt ("Escribe tu nombre: "))
// -programas trasparentes o deterministas son lineales siempre dan el mismo resultado
// -length : saber los elementos de un array eje: animals.length;
// -mutar es cuando cambias una parte de la variable ejemplo un array 
// -reasignar es caambiar el valor de una variable

// 								DIA 02
// esctructuras de control de flujo: If / Else
// if (edad >= 18){					si el resultado es igual o mayor que se ejecuta 								lo que tengo las llaves
//                     //imprimir el mensaje al usuario//
//                     document.write(`Hola ${nombre}. tu edad es ${edad}.`) //template literal//ES6//
// } else es la ruta alternativa { //es la ruta alternativa// 
//     document.write("tu edad es inferior a 18años vuelve a la guarderia")
// }
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// //bifurcacion 
// if ( (edad >= 18) && (edad < 65 ) ){         &&=// se cumplen las dos //
//                 //imprimir el mensaje al usuario//
//              document.write(`Hola ${nombre}. tu edad es ${edad}.`)//template literal//ES6//
// } else { //es la ruta alternativa// 
//     document.write("tu edad es inferior a 18años vuelve a la guarderia")//imprimir el mensaje al usuario//
// }
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// //bifurcacion 
// if ( (edad >= 18) || (edad < 65 ) ){        ||= //or//
//                 //imprimir el mensaje al usuario//
//              document.write(`Hola ${nombre}. tu edad es ${edad}.`)//template literal//ES6//
// } else { //es la ruta alternativa// 
//     document.write("tu edad es inferior a 18años vuelve a la guarderia")//imprimir el mensaje al usuario//
// }

// esctructuras de control de flujo: switch / case  bifurcacion para muchos caminos a la vez 
// ej:
// const mes = prompt("dime tu mes de nacimiento: ")

// switch (mes) {
//     case "Diciembre":
//     case "Enero":
//     case "Febreo":
//     case "Marzo":
//         document.write("Naciste en el invierno!");
//         break;

//     case "Abril":
//     case "Mayo":
//     case "Junio":
//         document.write("Naciste en el primavera!");
//         break;
   
//     case "Julio":
//     case "Agosto":
//     case "Septiembre":
//         document.write("Naciste en el verano!");
//         break;
   
        
//     case "Octubre":
//     case "Noviembre":
//         document.write("Naciste en el otoño!");
//         break;
        
        
//     default:
//     document.write("lo escribiste mal");
//          break;
// }
// 							Bucles:

// -garbage collector:la parte del lenguaje que se encarga de limpiar las variables que no sean necesarias.
// Loop : es un trozo de codigo que se repite .
// res tipos de bucles:
// for el tradicional: se itera sobre una escala de numeros. iterable es una secuencia de numeros
// for actual  ES6 
// for..... of .... for (let animal of animals){  //para crear una variable con todos los elemntos de un array. solo se utiliza para arrys. es iterable. elemento o array
//     console.log(animal)
// }
// for.... in: a cada clave del objeto propiedad.
// while
// ,Do wile 

// undefined es un error indicando que te has pasado del vaor maximo del bucle.("index out of bounds").
										
// 											DIA03
// MAS TIPOS DE BUCLES:
// while: es cuando le pones restricciones o limites a un usuario ejemplo para poner contraseñas. es un bucle ilimitado.
// Do while :es igual pero que se ejecute como minimo una vez.
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//   										FUNCIONES
// FUNCIONES DECLARADAS: SON FUNCIONES QUE PRIMERO DEFINES (DECLARAS) LES DAS UN NOMBRE Y LUEGO LAS INVOCAS EN DOS PASOS SEPARADOS. 
// funcion (rutinas,sub-rutinas,metodos)(bloque de codigo que recibe un nombre y que se puede invocar cuando quieras pasandole unos argumentos)
// ARGUMENTO ES UN DATO QUE PASAS A UNA FUNCION

// defininr es crearla 
// invocar es usarla
// contexto "Scope" lo que hay entre las llavesde las funciones es el conjunto de variables que se puede usar dentro de una funcion.
// window es el objeto mas Global la representacion delcontexto global.(es el root de todo).
// scope global son fuera generalizadas 
// scope local son las internas dentro de contexto .
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// -FUNCIONES ANONIMAS: SON FUNCIONES QUE NO SE DEFINEN NO SE DECLARAN NO SE LES DA NOMBRE
// -funciones callback:funciones que se pasan de argumento a otras funciones 
// -metodo: funcion dentro de un objeto
// -shufle un orden aleatorio
// funciones Math:
// //window es el objeto mas Global la representacion delcontexto global.(es el root de todo).
// //dentro hay un bjeto guay llamado Math

// Math.min(2, 5, 6, 0, 8, 3, 1) //te da siempre el minimo de los que pongas.

// Math.max(2, 5, 6, 0, 8, 3, 1) //te da siempre el maximo de los que pongas.

// Math.round(2.4)
// 2               //redondea hacia abajo o hacia arriba el mas cercano

// Math.round(2.5)
// 3

// Math.floor(2.6) //redondea hacia abajo
// 2

// Math.cell(2.4) //redondea hacia arriba
// 3
// Math.random() //escoge un numero al azar entre 0 y 1.

// Math.random() * 10

// Math.road(Math.random() * 10) //modificado con formula para poner el rango tu mismo ejemplo


// 										EVENTOS:
// Eventos: son interacciones entre los usuario y una parte de  la pagina, ejemplo un botton.(se utiliza una funcion hasta que el usuario no interactue )

// //cada interaccion tiene como norma un unico target de html.una parte de pag no toda.

// //ej:

// function saluradr() {
//     alert("Bienvedido")
// }

// //hay dos formas de crear eventos 
// //1-en linea (html) ----> "on" + el tipo (type)  del elemento


// 											DOM

// DOM:es la representacion interna que tiene el navegador de la estructura de pag web.(interpretacion interna del codigo o estructura que has creado de una pag web)


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////