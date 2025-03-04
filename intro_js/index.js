// *** ARROW FUNCTIONS *** //
// const hello = () => console.log("Hello")
// hello()

// const dobro = (valor) => valor * 2
// console.log(dobro(10))

// const triplo = (valor) => {
//     return valor * 3
// }
// console.log(triplo(10))

// const ePar = n => {
//     return n % 2 === 0
// }
// console.log(ePar(2))
//1

console.log('----')
// // *** FUNCOES *** //
// function hello () {
//     console.log('Oi')
// }
// hello()

// // Houve uma redefinicao de funcao
// function hello (nome){
//     console.log(`Hello ${nome}`)
// }
// hello('Pedro')
// // Não há sobrecarga de funcao!!

// function soma(a,b){
//     return a + b
// }
// const res = soma(2, 3)
// console.log(res)

// const res1 = soma('2', 3)
// console.log(res1)

// //funcoes anonimas
//  const dobro = function (n) {
//     return n * 2
// }
// const res2 = dobro(4)
// console.log(res2)

// // criar parâmetros com valor padrão
// const triplo = function (n = 5){
//     return 3 * n
// }
// console.log(triplo())
// console.log(triplo(10))



// *** Alguns Métodos *** //
// const nomes = ['Ana Maria', 'Antonio', 'Rodrigos', 'Alex', 'Cristina']
// const apenasComA = nomes.filter((n) => n.startsWith('A'))
// //estamos usando uma arrow function, similar a funcao lambda
// console.log(apenasComA)

// const res = nomes.map((n) => n.charAt(0))
// console.log(res)

// const todosComecamComA = nomes.every((n) => n.startsWith('A')) // se todos os elementos comecarem com A é true
// console.log(todosComecamComA)

// valores = [1,2,3,4]
// const soma = valores.reduce((ac, v) => ac + v) //ac: acumulador 
// console.log(soma)

console.log('----')
// // *** VETORES ***//
// //declaracao
// v1 = []
// //acesso das posicoes a partir do 0
// v1[0] = 3.4
// v1[10] = 2
// v1[2] = 'abc'
// console.log(v1.length)
// console.log(v1)

// //inicializando na declaracao
// v2 = [2, 'abc', true]
// console.log(v2)
// //iterando
// for(let i = 0 ; i < v2.length; i++){
//     console.log(v2[i])
// }

// //vetores constantes
// const v3 = [1]
// v3[2] = 'abc'
// console.log(v3)

console.log('----')
// // *** COMPARACAO *** //
// === NÃO REALIZA COERCAO
// console.log(1 == 1)//true
// console.log (1 == "1") //true
// console.log (1 === 1) //true
// console.log (1 === "1")//false
// console.log (true == 1) //true
// console.log (1 == [1])//true
// console.log (null == null)//true
// console.log (null == undefined)//true
// console.log([] == false)//true
// console.log ([] == [])//false
// console.log(false == 0)//true

console.log('----')
// // *** COERCAO *** //

// const n1 = 2
// const n2 = '3'

// //coercao implicita
// const n3 = n1 + n2
// console.log(n3) // transformou n1 em string e concatenou

// //coercao explícita a soma acontece
// const n4 = n1 + Number(n2)
// console.log(n4)

console.log('----')
// var linguagem = "Javascript"
// console.log("Aprendendo " + linguagem)
// //váriavel pode ser redeclarada
// var linguagem = "Java"
// console.log("Aprendendo " + linguagem)
// // a variável nome já existe aqui, mas não tem valor atribuido
// // ela é icada do ingles hoist para fora do bloco
// console.log(`Oi, ${nome}`)
// var idade = 18
// if (idade >= 18){
//     var nome = "João"
//     console.log(`Parabéns, ${nome}. Voce pode dirigir`)
// }

// console.log(`Até mais, ${nome}.`)

// declarando constantes 
//const nome = 'José'
//const idade = 27
//console.log(nome, idade)