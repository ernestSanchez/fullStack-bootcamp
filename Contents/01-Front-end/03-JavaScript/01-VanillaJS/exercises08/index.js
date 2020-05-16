


function httpGetAsync(theUrl, callback) {
    let requester = new XMLHttpRequest();
    requester.onreadystatechange = function () {
        if (requester.readyState == 4 && requester.status == 200)
            callback(JSON.parse(requester.responseText));
    }
    requester.open("GET", theUrl, true);
    requester.send(null);
}
function addedInfo(array) {



    let newHtml = document.querySelector("body > div").innerHTML = `<ul>
                                                                 <li>${array[0].name}</li><br>
                                                                 <ul><li><img src="${array[0].flag}" style="width: 100px;height: auto; text-transform: uppercase;font-weight: bold; font-size: xx-large;"></ul></li>
                                                                 <ul><li>Prefix: ${array[0].callingCodes}</ul></li>
                                                                 <ul><li>Capital: ${array[0].capital}</ul></li>
                                                                 <ul><li>Population: ${array[0].population}</ul></li>
                                                                 <ul><li>Gini: ${array[0].gini}</ul></li>
                                                                 <ul><li>languagues: ${array[0].languagues}</ul></li>
                                                                 <ul><li>curriencies: ${array[0].curriencies}</ul></li>`


    return newHtml;
}


document.querySelector("body > nav > form > button").addEventListener("click", () => {

    let countrie = document.querySelector("body > nav > form > input").value;

    httpGetAsync("https://restcountries.eu/rest/v2/name/" + countrie, addedInfo);
});