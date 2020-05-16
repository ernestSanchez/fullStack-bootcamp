


/////exercise01

let nowDate = new Date()

let hours = `Hours: ` +  nowDate.getHours()

let minutes = `minutes: ` + nowDate.getMinutes()

console.log(hours,minutes)


//////exercise02


let unixTime = `milisegundos: ` + nowDate.getTime()

console.log(unixTime)


/////exercise03


let global = []


function imprimir() {
    
   let textUser =  document.querySelector(".user-Text").value;
    global.push(textUser)
    clear()
    document.querySelector(".result").innerHTML += `<h4>Global:${global}</h4>`
  


}


function clear() {
    
    document.querySelector(".user-Text").value = ""
    document.querySelector(".result").innerHTML = ""


}





/////exercise04


function removed() {
   
    let userNum = document.querySelector(".user-Num").value;
    let newNum =  parseInt(userNum);
        
    global.splice(newNum,1);
    
    clear()
    document.querySelector(".result").innerHTML += `<h4>Global: ${global}</h4>`
  
}


/////exercise05


function reverse() {

 document.querySelector("body > div > form > button.btn.btn-outline-primary.reverse")

    global = global.reverse()
 
 document.querySelector(".result").innerHTML = `<h4>Global: ${global}</h4>`;


}



/////exercise06

function searcher() {
   
  let search =   document.querySelector(".search-Text").value;

  
   let result =  global.indexOf(search);
    console.log(result)
    
   if(result >= 0){
        document.querySelector(".result").innerHTML = `<h4>Result: True</h4>`;
    }
    if(result <= -0){
        document.querySelector(".result").innerHTML = `<h4>Result: False</h4>`;
    }
}


/////exercise07

function dateUser() {
    
  let userDate = document.querySelector(".date-user").value;
  let dateIn  = new Date(userDate)
  let convertDateIn = dateIn.getTime()
  
    let nowDate = new Date()
    let convertNowDate = nowDate.getTime()

let restaTime = (convertNowDate - convertDateIn) * 24; 

let result = restaTime

document.querySelector(".days-brth").innerHTML = `<p>Naciste hace : ${result} dias!!</p>`

}


/////exercise08

function dateDeath() {
    
   let boton = document.querySelector(".death")
   
    let createDate = new Date()
    let convertTime = createDate.getTime()


    convertTime =   Math.round(Math.random(convertTime) * 720)
    
       let death = new Date(convertTime)
        console.log(death)
  
}




document.querySelector(".added").addEventListener("click",imprimir);

document.querySelector(".delete").addEventListener("click",removed);

document.querySelector(".reverse").addEventListener("click",reverse);

document.querySelector(".search").addEventListener("click",searcher);

document.querySelector(".days").addEventListener("click",dateUser);

document.querySelector(".death").addEventListener("click",dateDeath);