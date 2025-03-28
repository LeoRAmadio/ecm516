// *** JSON *** //

// Definição de um objeto representando uma pessoa chamada João de 17 anos
const pessoa1 = {
    nome: "João",
    idade: 17
};

console.log(pessoa1.nome); // Acessando propriedade com notação de ponto
console.log(pessoa1["idade"]); // Acessando propriedade com notação de colchetes

// Definição de um objeto representando Maria com informações detalhadas de endereço
const pessoa2 = {
    nome: "Maria",
    idade: 21,
    endereco: {
        logradouro: "B",
        numero: 121,
        bairro: {
            nome: "J"
        },
        cidade: {
            nome: "Itu",
            populacao: 70000
        }
    }
};

console.log(pessoa2.endereco.bairro.nome); // Acessando o nome do bairro
console.log(pessoa2["endereco"]["cidade"]["populacao"]); // Acessando a população da cidade

// Definição de um objeto representando uma concessionária com CNPJ, endereço e veículos
const concessionaria = {
    cnpj: "123456",
    endereco: {
        logradouro: "Rua B",
        numero: 121
    },
    veiculos: [
        {
            marca: "X",
            modelo: "W",
            fabricacao: 2020
        },
        {
            marca: "V",
            modelo: "Z",
            fabricacao: 2022
        },
        {
            marca: "GM",
            modelo: "Tracker",
            fabricacao: 2025
        }
    ]
};

console.log(concessionaria.veiculos[2].modelo); // Exibe "Tracker"

// Percorrendo o array de veículos com um loop tradicional
for (let i = 0; i < concessionaria.veiculos.length; i++) {
    console.log(concessionaria.veiculos[i]);
}

// Percorrendo o array de veículos com um loop `for...of`
for (let veiculo of concessionaria.veiculos) {
    console.log(veiculo);
}

// *** Exercício: Criar um objeto de calculadora *** //
// 1. A soma deve ser feita com uma função regular (function)
// 2. A subtração deve ser feita com uma arrow function sem `{}` e sem `return` explícito
// 3. No final, demonstrar o funcionamento da calculadora

const calculadora = {
    soma: function (a, b) {
        return a + b;
    },
    subtracao: (a, b) => a - b
};

console.log(calculadora.soma(2, 3)); // 5
console.log(calculadora.subtracao(5, 3)); // 2

// Armazenando a função soma em uma variável e chamando-a
const armazenaSoma = calculadora.soma;
console.log(armazenaSoma(4, 5)); // 9
