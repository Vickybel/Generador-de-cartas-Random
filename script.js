const palos = ["corazón", "diamante", "pica", "trébol"];
const valores = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let paloArriba = document.querySelector("#simboloArriba");
let numero = document.querySelector("#numero");
let paloAbajo = document.querySelector("#simboloAbajo");


function eleccionCarta(arriba1, arriba2){
    let carta =[]
    carta.push(arriba1[Math.floor(Math.random()*arriba1.length)]);
    carta.push(arriba2[Math.floor(Math.random()*arriba2.length)]);
    return carta
}
function asignarColor(up){
    if(up[0] === "corazon" || up[0] === "diamante"){
        paloArriba.style.color = "red";
        numero.style.color = "red";
        paloAbajo.style.color = "red";
    }
    else{
        paloArriba.style.color = "black";
        numero.style.color = "black";
        paloAbajo.style.color = "black";
    }
}
function asignarPalo(up){
    if(up[0] === "corazon"){
        paloArriba.innerHTML = "♥"
        paloAbajo.innerHTML = "♥"
    }
    else if(up[0] === "diamante"){
        paloArriba.innerHTML = "♦"
        paloAbajo.innerHTML = "♦"
    }
    else if(up[0] === "trebol"){
        paloArriba.innerHTML = "♣"
        paloAbajo.innerHTML = "♣"
    }
    else{
        paloArriba.innerHTML = "♠"
        paloAbajo.innerHTML = "♠"
    }
}
function asignarValor(up){
    numero.innerHTML = up[1];
}
function generacionCarta(){
    let carta = eleccionCarta(palos, valores);
    asignarColor(carta);
    asignarPalo(carta);
    asignarValor(carta);
}

window.onload = function(){generacionCarta()}
document.querySelector(".boton").addEventListener("click", generacionCarta)