// ***************** VETORES *****************//

// Declaração
let v1 = [];

// Acesso das posições a partir do índice 0
v1[0] = 3.4;
v1[10] = 2;
v1[2] = 'abc';

console.log(v1.length); // 11 (o tamanho é o maior índice + 1)
console.log(v1); // [3.4, <2 empty items>, 'abc', <7 empty items>, 2]

// Inicializando na declaração
let v2 = [2, 'abc', true];
console.log(v2);

// Iterando sobre o vetor
for (let i = 0; i < v2.length; i++) {
    console.log(v2[i]);
}

// Vetores constantes
const v3 = [1];
v3[2] = 'abc'; // Pode modificar elementos, mas não pode reatribuir v3
console.log(v3); // [1, <1 empty item>, 'abc']


// ***************** Alguns Métodos *****************//

const nomes = ['Ana Maria', 'Antonio', 'Rodrigos', 'Alex', 'Cristina'];

// Filtrando elementos que começam com 'A'
const apenasComA = nomes.filter((n) => n.startsWith('A'));
// Estamos usando uma arrow function, similar a uma função lambda
console.log(apenasComA); // ['Ana Maria', 'Antonio', 'Alex']

// Mapeando para obter a primeira letra de cada nome
const res = nomes.map((n) => n.charAt(0));
console.log(res); // ['A', 'A', 'R', 'A', 'C']

// Verificando se todos os nomes começam com 'A'
const todosComecamComA = nomes.every((n) => n.startsWith('A')); 
// Se todos os elementos começarem com 'A', retorna true
console.log(todosComecamComA); // false

// Usando reduce para somar os valores de um array
const valores = [1, 2, 3, 4];
const soma = valores.reduce((ac, v) => ac + v); // ac: acumulador
console.log(soma); // 10


//Um callback é uma função que é passada como argumento para outra função. Essa função será executada 
// posteriormente, dentro da função que a recebeu.
//No caso dos métodos filter, map, every e reduce, cada um recebe um callback, que é 
// chamado para cada elemento do array.
