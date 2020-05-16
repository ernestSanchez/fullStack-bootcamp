function httpGetAsync(theUrl, callback)
{
    let requester = new XMLHttpRequest();

    requester.onreadystatechange = function() {
   
        if (requester.readyState == 4 && requester.status == 200)
            callback(JSON.parse(requester.responseText));
    }
    requester.open("GET", theUrl, true); 
    
    requester.send(null);
}


function httpDeleteAsync(theUrl, callback)
{
    let requester = new XMLHttpRequest();

    requester.onreadystatechange = function() {
   
        if (requester.readyState == 4 && requester.status == 204)
            callback(JSON.parse(requester.responseText));
    }
    requester.open("DELETE", theUrl, true); 
    
    requester.send(null);
}





function Imprimir(responseText){

   document.querySelector(".first-name").innerHTML = responseText.data.first_name
   document.querySelector(".second-name").innerHTML = responseText.data.last_name
   document.querySelector(".email").innerHTML = responseText.data.email
   document.querySelector(".avatar").src = responseText.data.avatar
}

function remove(response) {
    
    console.log(response)

}




httpGetAsync("https://reqres.in/api/users/2", Imprimir);

document.querySelector(".delete").addEventListener("click",() => {
    
    httpDeleteAsync("https://reqres.in/api/users/2",remove);

});