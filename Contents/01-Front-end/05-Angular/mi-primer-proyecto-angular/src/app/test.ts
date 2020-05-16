




let p2:string = autogame(["piedra", "papel", "tijera"])

function autogame(machine:string[]):string {

    let result:string = machine[Math.round(Math.random() * (machine.length)) - 1];
    return result;
}

function game(P1:string, P2:string):void {

    if (P1 === "papel" && P2 === "piedra") {
        alert("P1 Win")
    }
    else if (P1 === "piedra" && P2 === "papel") {
        alert("Machine Win")
    }
    else if (P1 === "piedra" && P2 === "tijera") {
        alert("P1 Win")
    }
    else if (P1 === "tijera" && P2 === "piedra") {
        alert("Machine Win")
    }
    else if (P1 === "tijera" && P2 === "papel") {
        alert("P1 Win")
    }
    else if (P1 === "papel" && P2 === "tijera") {
        alert("Machine Win")
    } else {
        alert("Dead Heat")
    }
}
let p1:string = prompt("Player 1 Seleciona piedra , papel o tijera ");
let videogame = game(p1, p2)
