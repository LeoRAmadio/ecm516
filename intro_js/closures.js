// ***************** CLOSURES *****************//

// Função que define duas funções internas e retorna um objeto com ambas
function eAgora() {
    let cont = 1;
    function f1() {
        console.log(cont);
    }
    cont++;
    function f2() {
        console.log(cont);
    }
    return { f1, f2 };
}

const eAgoraResult = eAgora();
eAgoraResult.f1(); // 1
eAgoraResult.f2(); // 2

//eAgora -> funcao de alta ordem (retorna f1 e f2) ; f1 e f2 -> funcaoes de primeira classe (retornadas como valores de eAgora)

// Fábrica de funções que retorna uma função que imprime uma saudação
const saudacoesFactory = (saudacao, nome) => () => {
    console.log(`${saudacao}, ${nome}`);
};

// Alternativa com função tradicional
const saudacoesFactoryDireito = function (saudacao, nome) {
    return function () {
        console.log(`${saudacao}, ${nome}`);
    };
};

const olaJoao = saudacoesFactory('Olá', 'João');
const adeusJoao = saudacoesFactory('Adeus', 'João');
olaJoao(); // "Olá, João"
adeusJoao(); // "Adeus, João"

// Exemplo simples de closure
function ola() {
    let nome = 'João';
    return function () {
        console.log(`Olá, ${nome}`);
    };
}

ola()(); // "Olá, João"

// Função chamando outra função dentro do seu escopo
function f() {
    let nome = 'João';
    function g() {
        console.log(nome);
    }
    g();
}

// Função que recebe outra função como parâmetro
function f(funcao) {
    funcao();
}

// Função que retorna outra função
function g() {
    function outraFuncao() {
        console.log('Fui criada por g');
    }
    return outraFuncao;
}

const gResult = g();
gResult(); // "Fui criada por g"

f(g()); // "Fui criada por g"

g()(); // "Fui criada por g"

f(g()()); // Aqui há um erro pois `g()()` retorna `undefined`

// console.log(f(g()())) // Isso geraria um erro pois f espera uma função, mas g()() retorna undefined

// Passando função anônima diretamente para `f`
f(function () {
    console.log('Fui passada para f');
});

// Função armazenada em uma variável
let umaFuncao = function () {
    console.log('Fui armazenada em uma variável');
};
umaFuncao();

// **** Explicação sobre Closures **** //
//Closures são funções que "lembram" do escopo onde foram criadas, 
// mesmo após esse escopo ter sido encerrado. No código acima:

//Função eAgora() cria duas funções internas (f1() e f2()) que 
// acessam a variável cont, mesmo depois que eAgora() já foi executada.

//Funções retornando funções (g(), gResult(), etc.) reforçam a ideia de 
// que funções podem ser passadas como valores e armazenadas.

//Quando e porque usar closure? 