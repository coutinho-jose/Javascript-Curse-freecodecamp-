/* Instruções switch */

function caseInswitch(val) {
    var answer = "";

    switch(val) {
        case 1:
            answer = "Alpha";
            break;
        case 2:
            answer = "Beta";
            break;
        case 3:
            answer = "Gamma";
            break;
        case 4:
            answer = "Delta";
    }

    return answer;
}

console.log("Função (caseInswitch):", caseInswitch(2));

//=============================================================================================================================================

/* Opção padrão em instruções switch */

function diaDaSemana(opcao) {
    var dia = "";

    switch(opcao) {
        case 1:
            dia = "Segunda-Feira";
            break;
        case 2:
            dia = "Terça-Feira";
            break;
        case 3:
            answer = "Quarta-Feira";
            break;
        case 4:
            dia = "Quinta-Feira";
            break;
        case 5:
            dia = "Sexta-Feira";
            break;
        case 6:
            dia = "Sábado";
            break;
        case 7:
            dia = "Domingo";
            break;
        default:
            dia = "Dia da Semana Inválido";
    }

    return dia;
}

console.log("Dia da Semana:", diaDaSemana(5));

//=============================================================================================================================================

/* Múltiplas opções idênticas em instruções switch */

function sequentialSizes(val) {
    var resp = "";

    switch(val) {
        case 1:
        case 2:
        case 3:

        resp = "Baixo";
        break;

        case 4:
        case 5:
        case 6:

        resp = "Médio";
        break;

        case 7:
        case 8:
        case 9:

        resp = "Alto";
        break;
    }

    return resp;

}

console.log("Função (sequentialSizes):", sequentialSizes(1));