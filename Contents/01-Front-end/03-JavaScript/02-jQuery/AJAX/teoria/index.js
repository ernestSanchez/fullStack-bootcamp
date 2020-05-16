




//////AJAX O HTTP 

//LLAMADAS HTTP ES LA FORMA EN QUE SE COMUNICA DEL FRONT AL BACkEND.

//get,post,put,delete.


//funciones para hacer peticiones http en jquery


///////llamada GET

$.ajax({                                                    //jquery ajax parsea automaticamente el jason.
    "url":"https://api.chucknorris.io/jokes/random",
    "type": "GET",   //TIPO DE PETICION.
    //si funciona lo que queremos que haga//
    "success": function (respuesta) {
        console.log(respuesta)
    },
    "error":function (error) {   //en caso que no funcione la api por falta de internet por ejemplo.lo que queremos que haga
        console.log(error)
    },
    "headers":{  //para añadir un header customizado,en este caso es obj dentro de un obj //es informacion extra que mando a server
        "content-type": "application/jason",  //para avisar a la api que vas enviar un jason si no no reconoce el archivo. sirve para la Post.
        "X-Requested-With": "XMLHttpRequest"
    }
})


///////llamada POST

$.ajax({                                                    //jquery ajax parsea automaticamente el jason.
    "url":"https://test-neoland4.free.beeceptor.com",
    "type": "POST",   //TIPO DE PETICION.
    //si funciona lo que queremos que haga//
    "success": function (respuesta) {
        console.log(respuesta)
    },
    "error":function (error) {   //en caso que no funcione la api por falta de internet por ejemplo.lo que queremos que haga
        console.log(error)
    },
    "headers":{  //para añadir un header customizado,en este caso es obj dentro de un obj //es informacion extra que mando a server
        "content-type": "application/json",  //para avisar a la api que vas enviar un jason si no no reconoce el archivo. sirve para la Post.
        "X-Requested-With": "XMLHttpRequest" //header cors especial.
    },
    "data": {//DATOS BODY son los datos que mandamos los del body .as llamadas post tienen un body(en vanillia)cosa que las get no.
        "name": "morpheus",
        "job": "leader"
    }
})


///////llamada PUT es igual que la post lo unico diferente es que los datos ya tienen que estar.haber echo un post anteriormente.SIEMPRE LLEVAN BODY


///////llamada DELETE ES IGUAL QUE LA GET. NO LLEVAN BODY.



//// $.get()ES UNA FUNCION ALTERNATIVA DE JQUERY PARA HACER LLAMADAS TIPO GET. ejemplo:

                    $.get("https://api.chucknorris.io/jokes/random",
                        function (respuesta) {console.log(respuesta)}
                        )

//// $.post()ES UNA FUNCION ALTERNATIVA DE JQUERY PARA HACER LLAMADAS TIPO POST. ejemplo:

                    $.post("https://api.chucknorris.io/jokes/random",
                        {"name": "morpheus","job": "leader"},
                        function(respuesta){console.log(respuesta)}
                    )
