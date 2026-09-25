/* Armazenando Múltiplos Valores com Arrays */

var ourArray = ["Cotinho", 23];

/* Arrays Aninhados / Arrays Multidimensinais */

var myArray = [["Coutihno", 23], ["José", 45]];

/* Acessar Dados de um Array Usando Índices */

var meuArray = [50, 60, 70];

var myData = meuArray[0];
console.log(myData);

/* Modificar dados de um array usando índices */

var meuArrayq = [18, 64, 99];
meuArrayq[0] = 45;
console.log(meuArrayq);

/* Acessar arrays multidimensionais usando índices */

// Setup
var arraymeu = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]];
var meuDado = arraymeu[2][1];
console.log(meuDado);

// ============================================================================================================================================================================

/* Métodos Dos Arrays*/

// 1 - Manipular arrays com push();

var myArray = ["Coutihno", 21];
meuArray.push(["Evaristo", 26]); // push() => Adicionar um elemento

// 2 - Manipular arrays com pop();

var numeros = [1, 2, 3, 4, 5]
var removerArray = numeros.pop() // pop() => Remover o último elemento
console.log(numeros);

// 3 - Manipular arrays com shift();

var valores  = [1, 2, 3, 4, 5]
var removerArray = valores.shift() // shift() => Rmover o primeiro elemento
console.log(valores);

var myArray = [["José", 65], ["Antônia", 55]];
myArray.shift();

// 4 - Manipular arrays com unshift

myArray.unshift(["Evaristo", 26]);

// Lista de compras

var lista = [["Sumos", 3], ["Leite", 2], ["Bananas", 3], ["Refrigerantes", 2], ["Ovos", 3]]