// *** PROMISE *** //

// Função que calcula a soma de 1 até n usando a fórmula (n / 2) * (n + 1)
// Se n for negativo, retorna uma Promise rejeitada com mensagem de erro
// Regras: sem if/else ou switch, apenas return como instrução principal

const calculoDesafio = (n) => 
    n < 0 
        ? Promise.reject('Apenas positivos, por favor')
        : Promise.resolve((n / 2) * (n + 1));

// Teste com valor negativo
const resultado = calculoDesafio(-10);

resultado
    .then(res => {
        console.log(`Funcionou rapidinho: ${res}`);
    })
    .catch(err => {
        console.log(`Erro: ${err}`);
    });


// -----------------------------------------------
// Alternativa direta com Promise.resolve (sem validação)

const calculoRapidinho = (n) => 
    Promise.resolve((n / 2) * (n + 1));

// Teste com valor positivo
const resultado2 = calculoRapidinho(10);

resultado2.then(res => {
    console.log(`Funcionou rapidinho: ${res}`);
});


// -----------------------------------------------
// Versão "demorada": soma de 1 até n, simulando processo longo (sincrono)

function calculoDemorado(n) {
    let ac = 0;
    for (let i = 1; i <= n; i++) ac += i;
    return ac;
}

// -----------------------------------------------
// Versão com Promise (async-safe)

function calculoDemoradoAsync(n) {
    return new Promise((resolve, reject) => {
        let ac = 0;
        for (let i = 1; i <= n; i++) ac += i;
        resolve(ac);
    });
}

// Exemplo de uso com .then e .catch
const resultado3 = calculoDemoradoAsync(10);

resultado3
    .then(res => {
        console.log(`Funcionou: ${res}`);
    })
    .catch(err => {
        console.log(`Erro: ${err}`);
    });


// -----------------------------------------------
// Callback encadeado (Problema do "Hadouken")

const resultado4 = calculoDemoradoAsync(10);

resultado4
    .then(res1 => {
        console.log(`Funcionou (1): ${res1}`);
        return calculoDemoradoAsync(res1);
    })
    .then(res2 => {
        console.log(`Funcionou (2): ${res2}`);
    })
    .catch(err => {
        console.log(`Erro: ${err}`);
    });



// Promise.resolve(valor): retorna uma Promise resolvida com valor.

// Promise.reject(erro): retorna uma Promise rejeitada com erro.

// Uso de ternário (? :) evita if/else, útil em funções funcionais/declarativas.

// Encadeamento (.then().then().catch()) pode se tornar confuso — prefira async/await para evitar o "Hadouken" (código empurrado pra direita).