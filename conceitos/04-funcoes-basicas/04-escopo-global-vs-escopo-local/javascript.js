/* Escopo Global vs Escopo Local em Funções */

var outerWear = "Camisa";

function myOutfit () {
    var outerWear = "Calças";
    return outerWear;
}

console.log(myOutfit());
console.log(outerWear);