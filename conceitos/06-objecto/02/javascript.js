/* Criar objetos em JavaScript */

// Acessando propriedades de objetos com variáveis

var frutas = {
    1: "Maçã",
    2: "Banana",
    3: "Uva"
};

var posicaoFruta = 2;
var fruta = frutas[posicaoFruta];
// console.log(fruta);

// Atualizando propriedades de objetos

var aluno = {
    "nome": "Alberto Gabriel",
    "idade": 26,
    "curso": "Programação Web",
    "ano": 2026,
    "turma": "PAW-2026"
};

aluno.nome = "Vasco Massingue";
// console.log(aluno);

// Adicionar novas propriedades a um objeto

aluno['codigo do estudante'] = "213456A";
// console.log(aluno);

// Excluir propriedades de um objeto

delete aluno.turma;
// console.log(aluno);