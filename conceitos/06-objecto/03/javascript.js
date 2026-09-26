/* Criar objetos em JavaScript */

// Manipulando objetos complexos

var loja = [
    {
        "produto": "Samsung S25 Ultra",
        "categoria": "Celulares",
        "preco": 104.900,
        "tela": "Dynamic AMOLED 2X",
        "bateria": "5.000 mAh",
        "cores_disponiveis": [
            "Preto",
            "Azul",
            "Branco"
        ],
        "disponivel": true
    },

    {
        "produto": "Cadeira Gaming Pro",
        "categoria": "Mobiliário",
        "preco": 2500,
        "cores_disponiveis": [
            "Preto"
        ]
    }
]

// Acessando objetos aninhados

var myCelular = {
        "celular": {
            "especificacoes": {
                "ram": "8GB",
                "armazenamento": "256GB",
                "bateria": "5.000 mAh"
            },

            "cameras": {
                "principal": "200 MP",
            }

        }
    };

var conteudo = myCelular.celular.especificacoes["ram"];
console.log(conteudo);