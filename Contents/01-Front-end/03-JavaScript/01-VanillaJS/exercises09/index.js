function httpGetAsync(theUrl, callback) {
    let requester = new XMLHttpRequest();
    requester.onreadystatechange = function () {
        if (requester.readyState == 4 && requester.status == 200)
            callback(JSON.parse(requester.responseText));
            if( requester.status == 404){
               clear()
                document.querySelector("body > div > div > div.container > div.error").innerHTML = `<div class="alert alert-danger" role="alert">Does no exist`
               
            }
    }
    requester.open("GET", theUrl, true);
    requester.send(null);
}



function imprimeUsuario(array) {
   

    document.querySelector(".fullname").innerHTML = array.name
   
  }


function addedInfo(array) {

    let name = document.querySelector("body > div > div > div.input-group.mb-3 > input").value;//hago otra peticion para sacar el nombre completo cuando acabe mi funcion y lo enlazo con la funcion de arriba
    
    httpGetAsync("https://api.github.com/users/" + name , imprimeUsuario) // busco mas datos del usuario

    clear()

 

        for (let i = 0; i < array.length; i++ ){

            document.querySelector(".repos tbody").innerHTML += `<tr>
                                                                    <th><a href="${array[i].clone_url}">${array[i].name}</a></th>
                                                                    <td><i class="fa fa-star" aria-hidden="true"></i></td>
                                                                    <td>${array[i].stargazers_count}</td>
                                                                    <td><i class="fa fa-code-fork" aria-hidden="true"></i></td>
                                                                    <td>${array[i].forks_count}</td>
                                                                </tr>`

        }

        


   
}

function clear() {
 
        document.querySelector("body > div > div > div.input-group.mb-3 > input").value = ""
        document.querySelector(".repos tbody").innerHTML = ``
        document.querySelector(".owner img").src = ``
        document.querySelector(".login").innerHTML = ``
        document.querySelector(".bio").innerHTML = ``
        document.querySelector(".repositores").innerHTML = ``
        document.querySelector(".barra").innerHTML = ``
        document.querySelector("body > div > div > div.container > div.error").innerHTML = ""
        document.querySelector(".fullname").innerHTML = ``
   
    }




document.querySelector("#button-addon2").addEventListener("click", () => {

    let name = document.querySelector("body > div > div > div.input-group.mb-3 > input").value;

     httpGetAsync("http://prana-solutions.com/neoland/api/" + product, addedInfo);
});