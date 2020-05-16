


//PUT o UPDATE : es identica a la post una llamada que enviamos datos al servidor pero ya tendrian que estar guardados en el pasado
//(sirve para modificar datos guardados anteriormente)EJ: cambio de contraseña.

function httPutAsync(theUrl, callback)
{
    let requester = new XMLHttpRequest();
    
    requester.onreadystatechange = function() { 
        if (requester.readyState == 4 && requester.status == 200)
            callback(requester.responseText);
    }
    requester.open("PUT", theUrl, true); 
    let body = {
        "name": "morpheus",
        "job": "zion resident"  
    }                
    let bodyJSON = JSON.stringify(body)
    requester.send(bodyJSON);
}

function imprimir(responseText) {
    let respuesta = JSON.parse(responseText);
    console.log(respuesta)                          //  te devuelve otro objeto

}

httPutAsync("https://reqres.in/api/users/2", imprimir)