

//Vamos a hacer un conversor de temperaturas. Vuestra página web va a solicitar al
//usuario que le diga la unidad de partida (“Celsius” o “Farenheit”). Luego le
//preguntará por la cantidad de grados. Si el usuario indicó “Celsius”, le devolverá la//
//misma temperatura en grados Farenheit. Si el usuario indicó “Farenheit”, le
//devolverá la misma temperatura en grados Celsius.//

//pergunto al usuario estilo de temperatura//

/*let celsius = prompt("temperatura Celsius") //declaro la variable celssius = prompt para preguntar a usuario("texto a preguntar a usuario")
celsius = parseFloat(celsius)            // parseo el resutado ya que es texto "" en flotantes=decimales i lo añado a la variable el resultado.            
let farenheit = ( celsius * 9 / 5) + 32;  // creo una variable y le asigno la formula.
document.write("grados Farenheit "+farenheit) //luego mando a renderizar un texto mas el resultado de la variable.


let farenheit = prompt("temperatura Farenheit")
farenheit = parseInt(farenheit)
let celsiuss = ( farenheit - 32 ) * 5 / 9  ;
document.write("grados Celsius "+celsiuss)    */



//Vamos a hacer un programa que le pregunte al usuario la edad de su perro. Como
//todos sabéis, la edad de las mascotas se calculan multiplicando por 7 los años
//humanos. El usuario nos dirá la edad de su perro en años humanos. Nuestro
//programa le imprimirá al usuario el mensaje://

/*let edad = prompt("tu edad:")
ead = parseInt(edad)
let perro = (edad * 7 )
document.write("Tu perro tiene " +perro+ ` años en edad de perros` )*/


/*Tenemos en un array el nombre de los alumnos del curso:
let alumnos = ["Adolfo", "Sergio", "Diego", "Laura", "Ernesto", "Leonardo", "Alejandro",
"Samuel", "Alex", "Miguel"]
Nuestro programa le preguntará al usuario por un número. Le imprimirá al usuario en la
pantalla el nombre del alumno que se sienta en esa posición (NOTA: recordad que los
arrays empiezan en 0!!)*/

//let alumnos = ["Adolfo", "Sergio", "Diego", "Laura", "Ernesto", "Leonardo", "Alejandro",
//"Samuel", "Alex", "Miguel"];                                                               //primero siempre los datos la informacion



//let seleccion = prompt("dime un numero");                         //let seleccion = parseInt(prompt("dime un numero")); forma de hacerlo en una variable mas cerrada. siempre se lee desde mas adentro a fuera.

//seleccion = parseInt(seleccion);

//let persona = alumnos[seleccion]                //luego creo una variable y le asigno la vsariable que contiene los datos y 
                                                  //corchetes la otra variable que me da la informacion del usuario.//
//document.write(persona)


//Ahora vamos a hacer el array un poco más complejo. En lugar de guardar
//sencillamente el nombre de los alumnos, guardaremos en un array un objeto por
//cada alumno:
//let alumnos = [{'nombre': "Adolfo", 'Edad': 30}, {'nombre': "Sergio", 'Edad': 31}, {'nombre':
//"Diego", 'Edad': 44}, {'nombre': "Laura", 'Edad': "Deconocida"}, {'nombre': "Ernesto", 'Edad':
//"36"}, {'nombre': "Leonardo", 'Edad': "Desconocida"},{'nombre': "Alex", 'Edad': 30} ,
//{'nombre': "Samuel", 'Edad': 31}, {'nombre': "Alejandro", 'Edad': 44}, {'nombre': "Miguel",
//'Edad':"Desconocida"}]
//Vamos a hacer lo mismo de antes (preguntarle al usuario por un número). Pero la
//diferencia, es que esta vez le imprimiremos al usuario en pantalla el nombre y la edad del
//alumno que se sienta en dicha posición.

/*let alumnos = [{'nombre': "Adolfo", 'Edad': 30}, {'nombre': "Sergio", 'Edad': 31}, {'nombre':      
"Diego", 'Edad': 44}, {'nombre': "Laura", 'Edad': "Deconocida"}, {'nombre': "Ernesto", 'Edad':
"36"}, {'nombre': "Leonardo", 'Edad': "Desconocida"},{'nombre': "Alex", 'Edad': 30} ,
{'nombre': "Samuel", 'Edad': 31}, {'nombre': "Alejandro", 'Edad': 44}, {'nombre': "Miguel",
'Edad':"Desconocida"}]

let seleccion = prompt("dime un numero"); 
seleccion = parseInt(seleccion);
let persona = alumnos[seleccion]
document.write("Nombre: " + persona.nombre + " edad: " + persona.Edad ) //texto + nombre de la variable + del atributo. */


/*5. A menudo, los objetos y los arrays con los que trabajaremos se van a volver muy
complejos, en tanto que iremos anidando unos dentro de otros para formar
estructuras de datos complejas. Un ejemplo de ésto lo tenemos en el siguiente array:

Dentro, tenemos una estructura compleja de objetos y arrays anidados. Con el tiempo os
acostumbraréis a acceder a los datos dentro de estas estructuras tan complejas. Para hoy,
quiero que hagáis un programa que imprima al usuario el valor de la clave “callingCodes”
del objeto que os he pegado más arriba, además de la “region” y la “population”.*/





let countries =[{"name":"Spain","topLevelDomain":[".es"],"alpha2Code":"ES","alpha3Code":"ESP","callingCodes":["34"],"capital":"Madrid","altSpellings":["ES","Kingdom of Spain","Reino deEspaña"],"region":"Europe","subregion":"SouthernEurope","population":46438422,"latlng":[40.0,-4.0],"demonym":"Spanish","area":505992.0,"gini":34.7,"timezones":["UTC","UTC+01:00"],"borders":["AND","FRA","GIB","PRT","MAR"],"nativeName":"España","numericCode":"724","currencies":[{"code":"EUR","name":"Euro","symbol":"€"}],"languages":[{"iso639_1":"es","iso639_2":"spa","name":"Spanish","nativeName":"Español"}],"translations":{"de":"Spanien","es":"España","fr":"Espagne","ja":"スペイン","it":"Spagna","br":"Espanha","pt":"Espanha","nl":"Spanje","hr":"Španjolska","fa":"اسپانیا"},"flag":"https://restcountries.eu/data/esp.svg","regionalBlocs":[{"acronym":"EU","name":"European Union","otherAcronyms":[],"otherNames":[]}],"cioc":"ESP"}]

document.write("codes: " + countries[0].callingCodes[0]+"region: "+countries[0].region+ "population: " + countries[0].population )