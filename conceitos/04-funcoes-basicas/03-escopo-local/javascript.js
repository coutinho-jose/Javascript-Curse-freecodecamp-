/* Escopo Local */

/*

Definição: Ocorre quando uma variável é declarada dentro de uma função (escopo de função) ou de um bloco delimitado por chaves {} usando let ou const (escopo de bloco).

Acessibilidade: Fica restrita apenas àquele ambiente específico onde foi criada. Ela não pode ser lida ou alterada de fora do bloco ou função.

*/

function myLocalScope () {
    var myVar = 5;
    console.log(myVar);
}

myLocalScope();
// console.log(myVar); -> Não pode....