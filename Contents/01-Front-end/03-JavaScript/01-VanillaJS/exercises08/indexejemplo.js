



function httpGetAsync(theUrl, callback)//Se ejecutará cuando reciba la respuesta del API
{
    let requester = new XMLHttpRequest();//Instanciar un objeto que no existe por defecto. Crea 
    //una clase o plantilla para un objeto con unas características determinadas. El nombre
    //XMLHttpRequest es como una convención - no tiene que devolver xml.
    requester.onreadystatechange = function() { //Prepara al objeto para saber qué hacer cuando
        //llegue la respuesta. Cuando el estado de onready cambie que se ejecute la función anómina 
        //(callback) con la respuesta en texto como parámetro por si queremos usarla
        if (requester.readyState == 4 && requester.status == 200)
            callback(requester.responseText);
    }
    requester.open("GET", theUrl, true); //true for asynchronous -- las llamadas a las APIS son 
    //asíncronas siempre. El true se refiere a eso. Puede no ser así pero en general no interesa.
    //utilizo la variable requester(objeto) para abrir una 
    //conexión de tipo GET la url (endpoint) que le hemos dado como argumento.
    requester.send(null);//se envía la petición. Como abrir un túnel y enviarla. 
}
​
//Se manda la petición, se procesa y devuelve la respuesta. Javascript manda la petición y
//mientras se "tramita" sigue ejecutando el código. Por eso hay que decirle qué hacer en
//cuanto llegue la respuesta (plantilla del objeto). Este proceso se conoce como asíncrono.
//Proceso por el cual se procesan en paralelo. 
​
function Imprimir(responseText){
    let respuestaParseada = JSON.parse(responseText);
    document.querySelector("body > div").innerHTML = `
    <p>${respuestaParseada["value"]}</p>
    `
    console.log(respuestaParseada["value"])
    console.log("Sorpresa!")
}
​
httpGetAsync("https://api.chucknorris.io/jokes/random", Imprimir);
Contraer



