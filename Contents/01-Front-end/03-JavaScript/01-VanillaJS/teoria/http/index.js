




///peticiones http.

//comunicacion http es una comunicscion sin estado "Stateless"
//para comunicarnos con un servidor 

//GUI donde te comunicas con el usuario mediante elementos graficos como botones

//CLI a traves de comandos 

//API  a traves de codigo directamente

//efecto lateral/side efect : todo lo que altera nuestro codigo y viene de fuera (eje:una api,un promp)

//API : interface que te comunicas mediante codigo con otro programa.

//web api o api rest : es un servidor donde te comunicas mediante peticiones http que te devuelve datos 
//una de las caracteristicas es que es estatica espera que el cliente le haga la peticion para responder.

//api web socket:no espera al cliente le haga la peticion.solo al abrir la primera linea de 
//comunicacion luego la socket va enviando informacion independientemente.

//api graph QL :es una api en la que varios recursos varios datos comparten la misma url.con el mismo endpoint

//endpoint :es una url de una api a la que puedo hacer una pèticion http

//path es la parte que cambia es la parte final.

                               // ejempolo: pokeapi.co/api/   path //pokemon/charmander


                               //JSON javaScript Object  Notation.

                               //Xml

                               //Xml Json son formatos que usan las apis para mandar datos.

                               //json.pars para convertir JSON en javascript.

//peticion http es un mensaje que viaja entre un cliente y un servidor a traves de internet siguiendo un formato

//TODAS LAS PETICIONES TIENEN UN HEADERS :pongo informacion contextual con el contexto de la peticion
                                                //(contexto.quien soy,quien eres tu,que estoyu usando..)

//Y OTRA BODY. : es donde se manda el verdadero mensaje de la peticion."payload" JSON

//cuatro tipos de peticions:
                //GET:peticion para que un servidor te devuelva datos.
                //POST:yo mando datos a un servidor y los guarde.
                //PUT:para actualizar un dato existente en el servidor.
                //DELETE:peticion eliminar datos ejemplo darte de baja.

//AJAX : es un patron de programacion con datos. consiste en hacer una pag web que tenga eventos peticion de dom y elementos html

//asincronocidad : hacer trabajos en paralelo. el codigo va ejecutandose mientras espera la respuesta web.

//sincronocidad : es paso a paso y el codigo espera a ejecutarse al siguiente paso.


// 1xx informational response – the request was received, continuing process
// 2xx successful – the request was successfully received, understood and accepted
// 3xx redirection – further action needs to be taken in order to complete the request
// 4xx client error – the request contains bad syntax or cannot be fulfilled
// 5xx server error – the server failed to fulfill an apparently valid request
            //status 400 es un error del ususario.ejemplo escrito mal sun no0mbre.
            //status 500 es cuando el error esta en el server.

//query.Params o stringParams:son parametros que se le pasa en las apis on en las webs en la propia url (info extra) suelen ser opcionales no obligatorios
                    //ejemplo :http://www.omdbapi.com/?apikey=c153f948

// const urlParams = new URLSearchParams(window.location.search);
// const myParam = urlParams.get('myParam'); para buscar todos los query params.


//control de errores: codigo que se añade para prevenir errores para que no pete


//servidor proxy es un intermediario.

//VPN (virtualPrivateNetwork)es un conjunto de proxys interactuando entre ellos una red de proxys.
            //vps Tor,NordVPN


////////////////////////////////////////////////////////////////ejemplos:

function httpGetAsync(theUrl, callback)//Se ejecutará cuando reciba la respuesta del API
{
    let requester = new XMLHttpRequest();//Instanciar un objeto que no existe por defecto. Crea 
    //una clase o plantilla para un objeto con unas características determinadas. El nombre
    //XMLHttpRequest es como una convención - no tiene que devolver xml.
    requester.onreadystatechange = function() { //Prepara al objeto para saber qué hacer cuando
        //llegue la respuesta. Cuando el estado de onready cambie que se ejecute la función anómina 
        //(callback) con la respuesta en texto como parámetro por si queremos usarla
        if (requester.readyState == 4 && requester.status == 200)
            callback(requester.responseText);
    }
    requester.open("GET", theUrl, true); //true for asynchronous -- las llamadas a las APIS son 
    //asíncronas siempre. El true se refiere a eso. Puede no ser así pero en general no interesa.
    //utilizo la variable requester(objeto) para abrir una 
    //conexión de tipo GET la url (endpoint) que le hemos dado como argumento.
    requester.send(null);//se envía la petición. Como abrir un túnel y enviarla. 
}
​
//Se manda la petición, se procesa y devuelve la respuesta. Javascript manda la petición y
//mientras se "tramita" sigue ejecutando el código. Por eso hay que decirle qué hacer en
//cuanto llegue la respuesta (plantilla del objeto). Este proceso se conoce como asíncrono.
//Proceso por el cual se procesan en paralelo. 
​
function Imprimir(responseText){
    let respuestaParseada = JSON.parse(responseText);
    document.querySelector("body > div").innerHTML = `
    <p>${respuestaParseada["value"]}</p>
    `
    console.log(respuestaParseada["value"])
    console.log("Sorpresa!")
}
​
httpGetAsync("https://api.chucknorris.io/jokes/random", Imprimir);
Contraer



/////////////////////////////////////

// function httpGetAsync(theUrl, callback) {
//     let requester = new XMLHttpRequest();
//     requester.onreadystatechange = function () {
//         if (requester.readyState == 4 && requester.status == 200)
//             callback(JSON.parse(requester.responseText));
//         if( requester.status == 404){
//                 alert("Has escrito mal el nombre")
//         }
//     }
//     requester.open("GET", theUrl, true);
//     requester.send(null);
// }
// function addedInfo(array) {

//      let newHtml = `<p>${array.Title}</p>`
     
    
//     //error handling
//     if (array["Poster"] != "N/A")
//         newHtml += `<p><img src="${array.Poster}"></img></p>`
    
    
//     //operador ternario es como un if (un equivalente al if)

//                     //condicion         ?            loque Ocurre si si              : lo que ocurre si no 
       
//     newHtml += array["Poster"] != "N/A" ? `<p><img src="${array.Poster}"></img></p>` : ``

// otro ejemplo ternario.
                // if(alumno.estudiar() === false){
                //     succes = false; 
                // } else {
                //     succes = true;
                // }

            //ternario
                    // alumno.estudiar() === false ? succes = false : succes = true;


//      document.querySelector("body > div").innerHTML = newHtml
        
   
// }


// document.querySelector("body > nav > form > button").addEventListener("click", () => {

//     let movie = document.querySelector("body > nav > form > input").value;

//      httpGetAsync("http://www.omdbapi.com/?apikey=c153f948&t=" + movie, addedInfo);
// });

/////////////////////////// para usar proxys 
function httpGetAsync(theUrl, callback) {
    let requester = new XMLHttpRequest();
    requester.onreadystatechange = function () {
        if (requester.readyState == 4 && requester.status == 200)
            callback(JSON.parse(requester.responseText));
        if( requester.status == 404){
                alert("Has escrito mal el nombre")
        }
    }
    requester.open("GET", theUrl, true);
    
    //pongo la cabecera antes de mandar la peticion para usar el proxy
    requester.setRequestHeader("X-Requested-With", "XMLHttpRequest");

    requester.send(null);
}
function addedInfo(array) {

console.log(array)
        
   
}


document.querySelector("body > nav > form > button").addEventListener("click", () => {
 httpGetAsync("https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/" , addedInfo);
});                     //pongo la url de la api/la de cors miniwear petar peticion header. 

