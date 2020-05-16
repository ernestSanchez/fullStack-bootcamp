





//exercise01


function division(number, factor) {

    const result = number / factor;

    return result;
}

let divisor = division(50, 100);
console.log(divisor)
////////////////////////////////////////////////////////
//exercise02 

function positionString(array, string) {

    const result = array.indexOf(string);

    return result;
}

let cajaFrutas = ["piña", "melocoton", "melon"]
let frutas = positionString(cajaFrutas, "melon")
console.log(frutas)
////////////////////////////////////////////////////////////
//exercise03
function arrayTrueFalseIf(array) {

    let result = false;

    if (array[0] === array[1]) {

        result = true;
    }
    if (array[1] === array[2]) {

        result = true;

    }
    if (array[1] === 4) {

        result = false;

    }
    return result;
}

let trueFalseIf = arrayTrueFalseIf([1, 1, 3])       //arrayTrueFalseIf([1,2,3]) //debería retornar false
console.log(trueFalseIf)                         //arrayTrueFalseIf([1,1,3])// debería retornar true
                                                //arrayTrueFalseIf([1,4,3]) //debería retornar false

//////////////////////////////////////////////////////////////////////////////////       
//exercise04
function tellFortune(hijos, companero, ubicacion, profesion) {

    const result = "Seras una : " + profesion + " " + "en " + ubicacion + " y estqaras casado/a " + companero + " con " + hijos + " niños ";

    return result;
}

let fortune = tellFortune(20, "Emma", "Japon", "Astronauta");
document.write(fortune)
//////////////////////////////////////////////////////////////////
//exercise05 
function calculateDogAge(humano, perro) {

    const result = humano * perro;



    return result;
}

let dogYears = calculateDogAge(3, 7)
let dogYearsMid = calculateDogAge(5, 7)
let dogYearsDown = calculateDogAge(10, 7)
document.write("tu perro tiene " + dogYears + "  años perrunos" + "<br>" + "tu perro tiene " + dogYearsMid + "  años perrunos" + "<br>" + "tu perro tiene " + dogYearsDown + "  años perrunos");
////////////////////////////////////////////////////////////////////////
//exercise06
function celsiusToFahrenheit(celsius) {
    let cTemp = celsius;
    let cToFahr = cTemp * 9 / 5 + 32;
    let result = cTemp + '\xB0C is ' + cToFahr + ' \xB0F.';

    return result;
}

let CelciusFrenheit = CelsiusToFahrenheit(60);
console.log(CelciusFrenheit)
///////////////////////////////////////////////////////////////////
//exercise07
function fahrenheitToCelsius(fahrenheit) {
    let fTemp = fahrenheit;
    let fToCel = (fTemp - 32) * 5 / 9;
    let result = fTemp + '\xB0F is ' + fToCel + '\xB0C.';

    return result;
}

let frenheitCelsius = fahrenheitToCelsius(45);
console.log(frenheitCelsius)
/////////////////////////////////////////////////
//exercise08
function celsiusToFahrenheit(celsius) {
    let cTemp = celsius;
    let cToFahr = cTemp * 9 / 5 + 32;
    let result = cTemp + '\xB0C is ' + cToFahr + ' \xB0F.';

    return result;
}
function fahrenheitToCelsius(fahrenheit) {
    let fTemp = fahrenheit;
    let fToCel = (fTemp - 32) * 5 / 9;
    let result = fTemp + '\xB0F is ' + fToCel + '\xB0C.';

    return result;
}

let frenheitCelsius = fahrenheitToCelsius(45);
console.log(frenheitCelsius)

function convertTemperature(grados, foc) {

    let result;

    if (foc === "Fahrenheit") {

        result = fahrenheitToCelsius(grados);
    } else {
        result = celsiusToFahrenheit(grados);
    }
    return result;
}

let convert = convertTemperature(60, "celsius");
console.log(convert)

/////////////////////////////////////////////////////////////////////////////
//exercise09
function test(array) {

    let result = array

    for (let i = 0; i < array.length; i++) {
        if (array[i] === 1) {
            document.write("Esta el numero 1")
        }
        if (array[i] === 3) {
            document.write("Esta el numero 3")
        }
    }


    return result;
}

let testing = test([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,])

//////////////////////////////////////////////
//exercise10
function personAge(ageRange) {

    if (ageRange >= 20 && ageRange <= 30 || ageRange >= 50 && ageRange <= 60) {
        alert("Estas en el rango")
    }
    return ageRange;

}

let rangoEdad = personAge(25)

//////////////////////////////////////////////////////
////exercise11

function checkMultiple(number) {
   
    let moduloThree = number % 3; 
    let moduloSeven = number % 7; 
     
    if (moduloThree === 0){
        alert("Es multiplo de TRES!!")
    }
    if (moduloSeven === 0){
        alert("Es multiplo de SIETE!!")
    }else{

    }
}

let multipleNumber = checkMultiple(6)

////////////////////////////////////////////
//exercise12
function addedCharacters (name){

        let addCharacters = []
    
        let numberCharacter = name.lenth //comprobar numero de characteres
        
        let text = name[4]+name[5]+name[6]

        addCharacters.push(text+name+text)
        
        console.log(addCharacters)
}

let chainString = addedCharacters("Ernesto")

////////////////////////////////////////////
//exdercise13

function calculateCharacter(character) {
    
            let result = 0
            let letra = "i"
        
            for (let i = 0; i <= character.length; i++){
                if (character[i] === letra  ){
                    result += 1
                }
            } return result;
}



let stringSearch = calculateCharacter("supercalifragilisticoespialidoso")
alert(`La letra i se repite ${stringSearch} veces`)



