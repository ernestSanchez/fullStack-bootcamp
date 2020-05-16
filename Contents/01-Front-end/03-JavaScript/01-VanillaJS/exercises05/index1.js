
let textOut = []

function saveText(event) {

    
    let textIn = (document.getElementById("texto").value)                                           
    
    textOut.push(textIn)



}

function addtext(event) {
    
     alert(textOut);
    
}


document.querySelector("body > input").addEventListener("blur", saveText);

document.querySelector("body > button.btn.btn-success").addEventListener("click", addText);