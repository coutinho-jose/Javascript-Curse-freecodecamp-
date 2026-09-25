/* Escopo Global */

/* 

Definição: Ocorre quando uma variável é declarada fora de qualquer função ou bloco.

Acessibilidade: Fica visível e acessível em qualquer parte do código, seja em funções, condicionais ou outros arquivos do script.

Cuidados: O uso excessivo pode causar conflitos de nomes ou alterações indesejadas por outras partes do programa.

*/

var myGlobal = 10;

function fun1 () {
    oopsGlobal = 5;
}

function fun2 () {

    var output = "";

    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal; 
    }

    if (oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }

    console.log(output);
}

fun1 ();
fun2 ();


