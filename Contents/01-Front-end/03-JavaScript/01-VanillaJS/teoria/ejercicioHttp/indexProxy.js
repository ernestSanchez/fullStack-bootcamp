
/////////////////////////// para usar proxys 
function httpGetAsync(theUrl, callback) {
    let requester = new XMLHttpRequest();
    requester.onreadystatechange = function () {
        if (requester.readyState == 4 && requester.status == 200)
            callback(JSON.parse(requester.responseText));
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
 httpGetAsync("https://cors-anywhere.herokuapp.com/https://anapioficeandfire.com/api/characters/583" , addedInfo);
});                     //pongo la url de la api/la de cors miniwear petar peticion header. 

