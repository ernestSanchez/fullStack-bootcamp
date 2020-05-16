



function httpDeleteAsync(theUrl, callback) {
    let requester = new XMLHttpRequest();
    requester.onreadystatechange = function () {
        if (requester.readyState == 4 && requester.status == 204)
            callback(requester.responseText);
    }
    requester.open("DELETE", theUrl, true);
    requester.send(null);
}
function Imprimir(responseText) {
    // let respuesta = JSON.parse(responseText);
    console.log(responseText)
}
httpDeleteAsync("https://reqres.in/api/users/2", Imprimir);



    //una web crud es la que permite hacer las 4 operaciones "CRUD (CREATE,READ,UPDATE,DELETE)"


