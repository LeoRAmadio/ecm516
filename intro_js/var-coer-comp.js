// ***************** VARIÁVEIS *****************//
var linguagem = "Javascript";
console.log("Aprendendo " + linguagem);

// A variável pode ser redeclarada com "var"
var linguagem = "Java";
console.log("Aprendendo " + linguagem);

// A variável "nome" já existe aqui, mas ainda não tem um valor atribuído
// Ela é içada (do inglês "hoisted"), mas seu valor é indefinido antes da atribuição
console.log(`Oi, ${nome}`); // Isso retornará undefined, pois "nome" ainda não foi definida,
// Ela foi içada, seu valor só é atribuída dentro do bloco if

var idade = 18;
if (idade >= 18) {
    var nome = "João";
    console.log(`Parabéns, ${nome}. Você pode dirigir.`);
}

console.log(`Até mais, ${nome}.`);


//Declarando constantes (imutáveis):
const nome1 = 'José'
const idade1 = 27
console.log(nome1, idade1)

// Hoisting é um comportamento do JavaScript que move declarações de variáveis e funções para o 
// topo do escopo durante a compilação.

//Escopo de var: Como var tem escopo de função (não de bloco), a variável nome declarada dentro 
// do if ainda existe fora dele. Isso pode levar a comportamentos inesperados.

//Preferivel usar let ou const

// Quando usar let ou const? ; porque nao usar var? ; 
// Quando nao uso palavras reservadas para declarar uma variavel, qual palavra reservada é usada implicitamente?

console.log('-----------------------------------------------------------')

// ***************** COERÇÃO *****************//

const n1 = 2;
const n2 = '3';

// Coerção implícita (type coercion)
const n3 = n1 + n2;
console.log(n3); // "23" -> transformou n1 em string e concatenou

// Coerção explícita (type conversion) - a soma acontece corretamente
const n4 = n1 + Number(n2);
console.log(n4); // 5


// ***************** COMPARAÇÃO *****************//

// === NÃO REALIZA COERÇÃO
console.log(1 == 1);        // true  -> Valores são iguais
console.log(1 == "1");      // true  -> Coerção: "1" (string) é convertido para número
console.log(1 === 1);       // true  -> Tipos e valores são iguais
console.log(1 === "1");     // false -> Tipos diferentes (número vs. string)
console.log(true == 1);     // true  -> Coerção: true é convertido para 1
console.log(1 == [1]);      // true  -> Coerção: array `[1]` é convertido para número 1
console.log(null == null);  // true  -> null sempre é igual a null
console.log(null == undefined); // true  -> null e undefined são considerados equivalentes
console.log([] == false);   // true  -> Coerção: [] é convertido para "", que vira 0
console.log([] == []);      // false -> Arrays são objetos, e a comparação verifica referências (objetos diferentes)
console.log(false == 0);    // true  -> Coerção: false é convertido para 0

