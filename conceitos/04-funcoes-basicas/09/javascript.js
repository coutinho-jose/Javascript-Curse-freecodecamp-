/* Use lógica condicional com instruções "if" */

/*Exemplo
function ourTrueOrFalse (isItTrue) {
    if (isItTrue) {
        return "Sim, é verdadeiro";
    }
    return "Não, é falso"
}*/

function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Sim, foi verdadeiro";
    }
    return "Não, foi falso";
}

console.log(trueOrFalse(true));

//=============================================================================================================================================

/* Comparação com operador de igualdade */
function testEqual(val) {
    if (val == 12) {
        return "Igual";
    }
    return "Não é igual";
}

console.log(testEqual(10))

//=============================================================================================================================================

/* Comparação com o operador de igualdade estrita */
function testStrict(val) {
    if (val === 7) {
        return "Igual";
    }
    return "Não é igual";
}

console.log(testStrict("7")) // "7" Não é estritamente igual a 7

//=============================================================================================================================================

/* Praticar a comparação de diferentes valores */

function compareEquality(a, b) {
    if (a === b) {
        return "Igual";
    }
    return "Diferente";
}

console.log(compareEquality(10, "10")); // Usando == 10 é igual a "10", Usando === vai ser diferente 