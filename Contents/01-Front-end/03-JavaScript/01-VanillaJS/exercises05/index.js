


// //Eventos son interacciones entre los usuario y una parte de  la pagina,
//     //ejemplo un botton(se utiliza una funcion hasta que el usuario no interactue) 
//     //cada interaccion tiene como norma un unico target de html.una parte de pag no toda.
//     //es un objeto que tiene toda la informacion y varias funciones sobre lo que se a disparado.
//         //ej:

//         function saluradr() {
//             alert("Bienvedido")
//         }




// //hay dos formas de crear eventos 


// //1-en linea (html) ----> "on" + el tipo (type)  del elemento
//    // EN HTML:
//         // <body>
            
//         //     <h1>Hello world</h1>
            
//         //     <!-- //1-en linea (html) -> "on" + el tipo (type)  del elemento -->
//         //     <button onclick="saludar()">hazme click!</button>
            
            
//         //     <script src="index.js"></script>
//         //     </body>
// ///////////////////////////////////////////


// //2- 

//     //esta es la funcion para llamar a elementos html:
//     //document.querySelector("SELECTOR-DE-CSS")EJ;

//     //.addEventListener()//le pongo el evento//

//         document.querySelector("h1").addEventListener("click", saludar)


//         //Estructura:


//         function saluradr() {
//                 alert("Bienvedido!!");
//         }

//         document.querySelector("body > button").addEventListener("click", saludar);


// //ejercicio:
//     //sumar numeros.


// function Suma() {
   
//     let num1 = prompt("dime el primer numero: ")
//     let result1 = parseInt(num1)
    
//     let num2 = prompt("dime el segundo numero: ")
//     let result2 = parseInt(num2)
    
//     alert(result1+result2)

// }

// document.querySelector("body > button").addEventListener("click", Suma);

// //tipos de eventos clasificaciones:
//     //en html siempre antaes on para linkar

// //1-Mouse
//     //-click :es elemento que se dispara cuando clikeas
//     //-dblclick
//     //-mouseover :es cuando introduces el puntero encima.
//     //-mouseout :es cuando lo sacas.
//     //-contextmenu :es el evento que se disapara cuando das click derecho ejemplo:

//             function saluradr(event,nombre) {
//                 event.preventDefault();//para evitar que el evento haga por defecto 
//                 alert("Bienvedido!!");
//             }

//             document.querySelector("body > button")
//             .addEventListener("contextmenu", saludar);

//     //-copy :cuando un usuario copia algo al portapapeles.(en ingles clipboard)
//     //-cut 

// ////////////////////////////////////////

// //1-Keyboard:

// //-keypress: se ejecuta cada vez que el usuario presiona una tecla. 
//     //se dispara solo cuando lo asocias a un elemento. se hace despues de selecionar focus luego se dispara.
//         //ej:
//                 function saluradr(event,) {
//                     console.log(event);
//                 }

//                 document.querySelector("body > input")
//                 .addEventListener("keypress", saludar);

//     //-Keyup: se activa cuando mantienes la tecla pulsada y la sueltas como cargar energia y la sueltas de golpe en un videojuego 
//     //-Keydown se repite mientras este apretada cono agacharse en videohjuegos

// //3-window/document:son los unicos eventos que se aplican sobre toda la ventana.(se suelen alicar sobre el body de la pagina)
//     //-resize : redimensionar se activa cuando el usuario redimensiona la pantalla 
//     //-scroll : 
//     //-load : se dispara cuando el elemento eya esta cargado.
//     //-unload : es un evento que se dispara cuando vas a cerrar la pagina o abandonarla para ir a otra mendio enlace. 



// //eventos https://www.w3schools.com/jsref/dom_obj_event.asp


///////////////////////////////////////////////////////////////////////////////



const sustantivos = ["Spider", "Laser", "Microbe", "Spectre", "Scan", "Badger", "Lighting", "Thunder", "Eagle", "Hurricane", "Storm", "Typhoon", "Fire", "Flame", "Flash", "Night", "Whirlwind", "Wind", "Dawn", "Light", "Dragon", "Wolf", "Vemon", "Cobra", "Viper", "Condor", "Stalker", "Panther", "Puma", "Shadow", "Freeze", "Night", "Hammer", "Mist", "Tulip", "Octopus", "Inferno", "Magma", "Patriot", "Stag", "Rhino", "Mole", "Sloth"]
const titulos_masculino = ["Boy", "Man", "Man", "Man", "Man", "Guy", "Mr.", "Doctor", "El", "Professor", "Captain", "Agent", "The", "The", "The", "The", "Lord", "Sgt.", "General"]
const titulos_femenino = ["Girl", "Woman", "Woman", "Woman", "Woman", "Gal", "Miss", "Doctor", "Professor", "Captain", "Agent", "The", "The", "The", "Sgt.", "General"]
const adjetivos = ["Imperial", "Amazing", "Spectular", "Dino", "Massive", "Fantastic", "Wonder", "Techno", "Electro", "Hydro", "Giant", "Super", "Incredi", "Daring", "Mega", "Tiny", "Red", "Dark", "Orange", "Screaming", "Green", "Teal", "Blue", "Golden", "Fearless", "Great", "Ameri", "Pyro", "Robo", "American", "Cyber", "Frozen"]

function sustantive(greatName) {

    let result = greatName[Math.round(Math.random() * (greatName.length)) - 1];

    return result;
}

function nameMasculino(Men) {

    let result = Men[Math.round(Math.random() * (Men.length)) - 1];

    return result;
}

function nameFemenino(Woman) {

    let result = Woman[Math.round(Math.random() * (Woman.length)) - 1];

    return result;
}

function adjective(adjetivo) {

    let result = adjetivo[Math.round(Math.random() * (adjetivo.length)) - 1];

    return result;
}

function compositionResult(test) {

    let resultados = []
    let adjetivo = adjective(adjetivos);
    let sustantivo = sustantive(sustantivos); 
    let femenino = nameFemenino(titulos_femenino); 
    let masculino = nameMasculino(titulos_masculino); 

    if (test === "Mujer") {

        resultados.push(femenino, sustantivo, adjetivo)
    }
    if (test === "Hombre") {

        resultados.push(masculino, sustantivo, adjetivo)
    }
    return resultados;
}

//ejercicio presionando el boton

  function nombres() {
     
    let test = prompt("Idica sexo Mujer o Hombre? : ");
    let Genero = compositionResult(test)
    alert(Genero)
 
}
document.querySelector("body > button").addEventListener("click", nombres);

//ejercicio presionando una tecla en el body

function mujer(event) {
    

    let nombrefem = (nameFemenino(titulos_femenino)+" "+adjective(adjetivos)+" "+sustantive(sustantivos));
    let nombremas = (nameMasculino(titulos_masculino)+" "+adjective(adjetivos)+" "+sustantive(sustantivos));
    
    if (event.key === "f")  {
        alert(nombrefem)
    }
    if (event.key === "m")  {
        alert(nombremas)
    }
    
}


document.querySelector("body").addEventListener("keypress", mujer);

///////////////////////////////////////////////////////////////






