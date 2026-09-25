/*Tipos de dados:
1 - undefined;
2 - null;
3 - boolean;
4 - string;
5 - number;
6 - object.
*/

// Definir Variável em Javascript
var meuNome = "Coutinho";
nome = 8;
//=======================================================================================================
let meuAplelido = "José";
//=======================================================================================================
const pi = 3.14;
//=======================================================================================================
/*
var: Escopo de função, aceita reatribuição e redeclaração.
let: Escopo de bloco, aceita reatribuição, mas não redeclaração.
const: Escopo de bloco, não aceita reatribuição nem redeclaração (valor constante).
*/

//=======================================================================================================

/* Declarando variáveis strings */
var primeiroNome = "Coutinho";
var apelido = "José";

// Escapando aspas literais em strings
var myStr = "Sou\" Coutinho\" José\" Minêz";
console.log(myStr);

/** Concatenando Strings Com Operador "+" */
var ourStr = "Venho Primeiro. " + "Venho Segundo."
console.log(ourStr);

/** Concatenando Strings Com Operador "+=" */
var str = "Venho Primeiro. ";
str += "Venho Segundo.";
console.log(str);

var meuStr = "Primeira Frase. ";
meuStr += "Segunda Frase.";
console.log(meuStr);

/** Concatenando Strings Com Variáveis */

var meuNome = "Coutinho";

meuNome = "Olá, meu nome é " + meuNome;
console.log(meuNome); 

//=======================================================================================================
/* anexar variáveis ​​a uma string */

var adjectivo = "JavaScript";
var mStr = "Estou Aprendendo ";

mStr += adjectivo;
console.log(mStr)

// Achar tamanho de uma string

tamanhoNome = 0;
var nome = "Coutinho";
tamanhoNome = nome.length;
console.log("O nome " + nome + " Tem " + tamanhoNome + " Caracteres");