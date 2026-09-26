/* Criar objetos em JavaScript */

var pessoa = {
    "Nome": "Coutinho José Minêz",
    "Idade": 21,
    "Estado Civil": "Solteiro",
    "Profissão": "Estudante",
    "Colegas": ["Vasco", "Aníbal", "Aires", "etc..."]
};

//=============================================================================================================================================

// Acessando propriedades de objetos com a notação de ponto

var celular = {
    "marca": "Samsung",
    "ano": 2020,
    "preco": 15000
};

var marca = celular.marca;
var ano = celular.ano;
var preco = celular.preco;

// Acessando propriedades de objetos com a notação de colchetes

var valorMarca = celular["marca"];
var valorAno = celular["ano"];
var valorPreco = celular["preco"];

console.log("Marca:", valorMarca);
console.log("Ano:", valorAno);
console.log("Preço:", valorPreco, "MZN");

//=============================================================================================================================================
