


//eventos interacciones de usuario con la maquina

////////////////////eventos JQuery

function saludar(event) {
    console.log(event)
    alert("hola mundo!")
    
}

//version vanilla
//document.querySelector(`body > div > button`).addEventListener(`click`,saludar)

//version JQuery
// $(`body > div > button`).click(saludar)

$(`body > div > input[type=text]`).keypress(saludar)


//query antiguo
//$(`body > div > button`).on(`click`,saludar)



