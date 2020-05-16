



//LLAMADA POST :siempre que se manda datos desde el front al back (de usuario a  servidor)

//antes de hacer un login siempre un register

function httPostAsync(theUrl, callback)
{
    let requester = new XMLHttpRequest();
    
    requester.onreadystatechange = function() { 
        if (requester.readyState == 4 && requester.status == 200)
            callback(requester.responseText);
    }
    requester.open("POST", theUrl, true); 
  
  //body o payload   
  let body = {
        "email": "eve.holt@reqres.in",
        "password": "cityslicka"
    } 
    //conversion a JSON                                  
    let bodyJSON = JSON.stringify(body)
    //enviar el dato.
    requester.send(bodyJSON);
}

function imprimir(responseText) {
        let respuesta = JSON.parse(responseText);
        document.cookie = `token=${respuesta["token"]}`//nos guarda la info del usuario en las cookies despues de loggearse.

        
}

httPostAsync("https://test-neoland3.free.beeceptor.com/login" , imprimir)


//token cadena de num y letras que devuelve un servidor y representa una sesion del usuario sin tener que preguntaqr contraseña y usuario mil veces.

//logegar es mandar username y pasword. me devuelve un token es la clave para mantener mi sesion abierta.


//cookies : es un pequeño espacio de memoria del navegador donde podemos guardar informacion con javaScript
                //tiene que ser informacion pequeña 
                //informacion no sensible.

        //tipos ga Google analitycs....


        