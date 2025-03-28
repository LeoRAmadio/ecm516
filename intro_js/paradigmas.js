// ***************** PROGRAMAÇÃO DECLARATIVA *****************//

// Soma todos os valores do array usando `reduce`
const valores = [1, 2, 3, 4];
const soma = valores.reduce((ac, v) => ac + v);
console.log(soma); // 10

// Verifica se todos os nomes começam com "A" (every retorna true se TODOS atenderem à condição)
const nomes = ['Ana', 'Alice', 'Pedro'];
const resultado = nomes.every(n => n.startsWith('A'));
console.log(resultado); // false (pois "Pedro" não começa com "A")

// Verifica se ALGUM nome começa com "A" (some retorna true se PELO MENOS UM atender à condição)
const resultado2 = nomes.some(n => n.startsWith('A'));
console.log(resultado2); // true (porque "Ana" e "Alice" começam com "A")

// Obtém a primeira letra de cada nome usando `map`
const resultante_2 = nomes.map(function(n) {
    return n[0];
});
console.log(resultante_2); // ['A', 'A', 'P']

// Filtrando nomes que começam com "A" ou "a" usando `filter`
const resultante = nomes.filter((nome) => nome.startsWith('A') || nome.startsWith('a')); // O(1)

// Alternativa: Convertendo para minúsculas para evitar diferenças de maiúsculas/minúsculas
const resultante_1 = nomes.filter(n => n.toLowerCase().startsWith('a')); // O(n)

console.log(resultante);
console.log(resultante_1);





// ***************** PROGRAMAÇÃO IMPERATIVA *****************//

const nomes1 = ['Ana Maria', 'Antonio', 'Leonardo', 'Alex', 'Cristina'];

// Produza um novo vetor que, para cada elemento do vetor nomes, contenha a sua letra inicial
let vetor = [];
for (const nome of nomes1) {
    vetor.push(nome.charAt(0));
}
console.log(vetor);

// Produza um novo vetor que contenha os nomes que começam com "A"
// Faça usando um loop for
let vet = [];
for (const nome of nomes1) {
    if (nome.charAt(0) === 'A') {
        vet.push(nome);
    }
}
console.log(vet);





// ***************** PROGRAMAÇÃO IMPERATIVA VS. DECLARATIVA *****************//
//Programação Imperativa
//O programador descreve passo a passo como atingir um objetivo.
//Exemplo:

const valoresEx = [1, 2, 3, 4];
let somaEx = 0;
for (let i = 0; i < valoresEx.length; i++) {
    somaEx += valoresEx[i];
}
console.log(somaEx);

//O código diz exatamente como percorrer o array e somar os valores.
//O programador controla o estado e o fluxo de execução (uso de for e variável soma).



//Programação Declarativa
//O programador apenas descreve a operação desejada, sem especificar os detalhes da iteração.
//Exemplo (equivalente ao código acima, mas declarativo):

const valoresEx1 = [1, 2, 3, 4];
const somaEx1 = valoresEx1.reduce((ac, v) => ac + v);
console.log(somaEx1);

//Aqui, a função reduce() oculta os detalhes da iteração.
//O código diz o que fazer (somar os elementos) e não como fazer 
// (percorre o array internamente).