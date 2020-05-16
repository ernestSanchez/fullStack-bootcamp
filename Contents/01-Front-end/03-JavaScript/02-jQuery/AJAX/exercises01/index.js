


$.ajax({
    "url":"https://test-bicing2.free.beeceptor.com",
    "type":"GET",
    "success":function(respuesta)
    {globalDoc.push(respuesta)
    imprimir()},
    "error":function(error){console.log(error)},
    "headers":{"content-type":"application/json","X-Requested-With": "XMLHttpRequest"}
})

let globalDoc = []


function imprimir() {

    let stationsBici = globalDoc[0].data.stations;
    let bikesAvaible = stationsBici[0];
    
    $(`body > div.table`).append(`<td>${bikesAvaible["num_bikes_available"]}</td>`)

console.log(bikesAvaible)
    


}







