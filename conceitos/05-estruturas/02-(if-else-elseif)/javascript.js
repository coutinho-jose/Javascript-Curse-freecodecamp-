/* Use lógica condicional com instruções "if...else" */

function testElse(idade) {

    var result = "";

    if (idade >= 18) {
        result = "Maior de idade!"
    } else {
        result = "Menor de idade!"
    }

    return result;
}

console.log("Função (testElse):", testElse(8));

//=============================================================================================================================================

/* Use lógica condicional com instruções "else...if" */

function testElseIf(idade) {

    var result = "";

    if (idade >= 13 && idade <= 17) {
        result = "Você é Adolescente";
    } else if (idade >= 18 && idade <= 64){
        return "Você é Adulto";
    } else {
        result = "Você é Idoso";
    }

    return result;
}

console.log("Função (testElseIf):", testElseIf(19));

//=============================================================================================================================================

/* Ordem local em instruções if-else */

function orderMyLogic(val) {
    if (val < 5) {
        return "Menor que 5";
    }else if (val < 10) {
        return "Menor que 10";
    }else {
        return "Maior ou igual a 10";
    }
}

console.log("Função (orderMyLogic):", orderMyLogic(3));

//=============================================================================================================================================

/* Alterando instruções if-else */

function testSize(num) {
    
    if (num < 5) {
        return "Minúsculo";
    }else if (num < 10) {
        return "Pequeno";
    }else if (num < 15) {
        return "Médio";
    }else if (num < 20) {
        return "Grande";
    }else {
        return "Enorme";
    }

    return "Altere-me";
}

console.log("Função (testSize):", testSize(25));

//=============================================================================================================================================

/* Código de golfe */

var nomes = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {

    if (strokes == 1) {
        return nomes[0];
    } else if (strokes <= par - 2) {
        return nomes[1];
    }else if (strokes == par - 1) {
        return nomes[2];
    }else if (strokes == par) {
        return nomes [3];
    }else if (strokes == par + 1) {
        return nomes[4];
    }else if (strokes == par + 2) {
        return nomes[5]
    }else if (strokes >= par + 3) {
        return nomes[6];
    }


    return "Altere";
}

console.log("Função (golfScore):", golfScore(4, 2))