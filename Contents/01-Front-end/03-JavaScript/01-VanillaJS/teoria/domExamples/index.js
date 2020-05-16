



//hacer un console.log de lo que hay escrito en el input

// function ejemplo() {
    
//     console.log(document.querySelector("body > div.pricing-header.px-3.py-3.pt-md-5.pb-md-4.mx-auto.text-center > input").value)
    
// }

// document.querySelector("body > div.pricing-header.px-3.py-3.pt-md-5.pb-md-4.mx-auto.text-center > button").addEventListener("click",ejemplo)


 
//cuando se haga click en el boton se tiene que poner azul y en negrita.

//  function cambioColorBoton() {
    

//     document.querySelector("body > div.pricing-header.px-3.py-3.pt-md-5.pb-md-4.mx-auto.text-center > button").className = ""
//     document.querySelector("body > div.pricing-header.px-3.py-3.pt-md-5.pb-md-4.mx-auto.text-center > button").className = "colorAzul"
//     document.querySelector("body > div.pricing-header.px-3.py-3.pt-md-5.pb-md-4.mx-auto.text-center > button").className += " negrita"
    
    //tambien menos codigo menos especifica pero sirve por que en css el azul y negrita estan mas abajo y se aplican por encima
    // document.querySelector("body > div.pricing-header.px-3.py-3.pt-md-5.pb-md-4.mx-auto.text-center > button").className = "colorAzul negrita"
//}

//document.querySelector("body > div.pricing-header.px-3.py-3.pt-md-5.pb-md-4.mx-auto.text-center > button").addEventListener("click",cambioColorBoton)

//cuando pulse el boton el 15 cambiara a 5

// function cambioNumero() {

 
//     let promo = document.querySelector("body > div.pricing-header.px-3.py-3.pt-md-5.pb-md-4.mx-auto.text-center > input").value
//     let text =  document.querySelector("body > div.container > div > div:nth-child(2) > div.card-body > h1")
        
//     if(promo === "sorprecha" ){
//             text.innerHTML = `<h1 class="card-title pricing-card-title">$ 5 <small class="text-muted">/ mo</small></h1>`
//         }
        
//  }
    
//  document.querySelector("body > div.pricing-header.px-3.py-3.pt-md-5.pb-md-4.mx-auto.text-center > button").addEventListener("click",cambioNumero)
    


 /////////////////////////////////////////////

let libro = {"titulo": "un mundo feliz",
            "autor": "Huxluey",
            "año": "1932",
            "imagen": "https://imagessl7.casadellibro.com/a/l/t5/57/9788497594257.jpg"
} 
    
function changeCard() {
    
     let card = document.querySelector("body > div.container > div > div:nth-child(1)");
    
        card.innerHTML = `
        <p>${libro["titulo"]}</p>
        <p>${libro["autor"]}</p>
        <p>${libro["año"]}</p>
        
        <img src="${libro["imagen"]}">
        `

}    



document.querySelector("body > div.pricing-header.px-3.py-3.pt-md-5.pb-md-4.mx-auto.text-center > button").addEventListener("click",changeCard)