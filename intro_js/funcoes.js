// ***************** FUNÇÕES *****************//

// Definição de uma função simples
function hello() {
    console.log('Oi');
}
hello(); // Chamada da função

// Houve uma redefinição da função
function hello(nome) {
    console.log(`Hello ${nome}`);
}
hello('Pedro'); // Hello Pedro
// Não há sobrecarga de função!!
// A versão anterior da função `hello()` foi sobrescrita

// Função com parâmetros e retorno
function soma(a, b) {
    return a + b;
}
const res = soma(2, 3);
console.log(res); // 5

const res1 = soma('2', 3);
console.log(res1); // '23' (coerção implícita transforma 2 em string)

// Funções anônimas
const dobro = function (n) {
    return n * 2;
};
const res2 = dobro(4);
console.log(res2); // 8

// Criando parâmetros com valor padrão
const triplo = function (n = 5) {
    return 3 * n;
};
console.log(triplo()); // 15 (usa o valor padrão de n = 5)
console.log(triplo(10)); // 30 (usa o valor passado)


// ***************** ARROW FUNCTIONS *****************//

// Arrow function sem parâmetros
const helloArrow = () => console.log("Hello");
helloArrow(); // Hello

// Arrow function com um parâmetro e retorno implícito
const dobroArrow = (valor) => valor * 2;
console.log(dobroArrow(10)); // 20

// Arrow function com bloco de código e retorno explícito
const triploArrow = (valor) => {
    return valor * 3;
};
console.log(triploArrow(10)); // 30

// Arrow function com uma condição
const ePar = (n) => {
    return n % 2 === 0;
};
console.log(ePar(2)); // true
