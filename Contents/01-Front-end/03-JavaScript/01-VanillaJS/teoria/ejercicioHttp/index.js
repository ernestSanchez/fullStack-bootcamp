




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
    requester.send(null);
}
function addedInfo(array) {
    // let newHtml = `<ul>
    //                 <li style="
    //                 font-size: x-large;">${array.Title}</li><br>
    //                 <ul><li>Year : ${array.Year}</ul></li>
    //                 <ul><li>Rated : ${array.Rated}</ul></li>
    //                 <ul><li>Runtime : ${array.Runtime}</ul></li>
    //                 <ul><li>ImdbRating : ${array.imdbRating}</ul></li>
    //             <li style="font-size: x-large;">Poster: <br><img src="${array.Poster}"></li> `
    
    let newHtml = `<p>${array.Title}</p>`
    
    if (array["Poster"] != "N/A")
        newHtml += `<p><img src="${array.Poster}"></img></p>`
    
    document.querySelector("body > div").innerHTML = newHtml
        
   
}


document.querySelector("body > nav > form > button").addEventListener("click", () => {

    let movie = document.querySelector("body > nav > form > input").value;

     httpGetAsync("http://www.omdbapi.com/?apikey=c153f948&t=" + movie, addedInfo);
});