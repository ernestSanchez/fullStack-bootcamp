


function httpPostAsync(theUrl,body,callback) {
    let requester = new XMLHttpRequest();

    requester.onreadystatechange = function () {
        if (requester.readyState == 4 && requester.status == 200)
            callback(requester.responseText);
    }
    
    
    requester.open("POST", theUrl, true);

   
    //conversion a JSON                                  
    let bodyJSON = JSON.stringify(body)
    
    //cabezera
    requester.setRequestHeader(`content-type`,`application/json`)
    
    //enviar el dato.
    requester.send(bodyJSON);
}

function imprimir(responseText) {
    let respuesta = JSON.parse(responseText);
    document.cookie = `token=${respuesta["token"]}`


}

document.querySelector(".enviar-datos").addEventListener("click", () => {
   
    let mail = document.querySelector(".mail-pasword ").value;
    let contraseña = document.querySelector(".contraseña-pasword").value;
    let body = {
        "email": mail,
        "password": contraseña,
    }
  
    httpPostAsync("https://reqres.in/api/register" ,body, imprimir);
});