// *** CLOSURES *** //

// function eAgora(){
//     let cont = 1
//     function f1(){
//         console.log(cont)
//     }
//     cont++
//     function f2(){
//         console.log(cont)
//     }
//     return {f1, f2}
// }

// const eAgoraResult = eAgora()
// eAgoraResult.f1()
// eAgoraResult.f2()

// const saudacoesFactory = (saudacao,nome) => () => {console.log(`${saudacao}, ${nome}`)}

// const saudacoesFactoryDireito = function(saudacao, nome){
//     let b;
//     return function(){
//         console.log(`${saudacao}, ${nome}`)
//     }
// }

// const olaJoao = saudacoesFactory('Ola', 'João')
// const adeusJoao = saudacoesFactory('Adeus', 'João')
// olaJoao()
// adeusJoao()

// function ola() {
//     let nome = 'João'
//     return function() {
//         console.log(`Olá, ${nome}`)
//     }
// }

// ola()()

// function f(){
//     let nome = 'João'
//     function g(){
//         console.log(nome)
//     }
//     g()
// }

// function f(funcao){
//      funcao()
// }

// function g(){
//     function outraFuncao(){
//         console.log('Fui criada por g')
//     }
//     return outraFuncao
// }

// const gResult = g()
// gResult()

// f(g())

// g()()

// f(g()())

//console.log(f(g()()))
// f(function(){console.log('Fui passada para f')})

// let umaFuncao = function(){
//     console.log('Fui armazenada em uma variável')
// }
// umaFuncao()



console.log('----')
// *** PROGRAMAÇÃO IMPERATIVA *** //

// const nomes = ['Ana Maria', 'Antonio', 'Leonardo', 'Alex', 'Cristina']

//produza um novo vetor que, para cada elemento do vetor nomes, contenha a sua letra inicial
// let vetor = []
// for (const nome of nomes){
//     vetor.push(nome.charAt(0))
// }
// console.log(vetor)

//produza um novo vetor que contenha os nomes que começam com A
//faça usando um for
// let vet = []
// for(const nome of nomes){
//     if (nome.charAt(0) === 'A'){
//         vet.push(nome)
//     }
// }
// console.log(vet)

console.log('----')

// *** PROGRAMAÇÃO DECLARATIVA *** //

// const valores = [1,2,3,4]
// const soma = valores.reduce((ac, v) => ac + v)
// console.log(soma)

// const resultado = nomes.every(n => n.startsWith('A'))
// console.log(resultado)

// const resultado = nomes.some(n => n.startsWith('A'))
// console.log(resultado)

// const resultante_2 = nomes.map(function(n){
//     return n[0]
// })
// console.log(resultante_2)

// //faça usando filter
// const resultante = nomes.filter((nome) => nome.startsWith('A') | nome.startsWith('a')) // O(1)
// //OU
// const resultante_1 = nomes.filter(n => n.toLowerCase().startsWith('a')) // O(n)

// console.log(resultante)

console.log('----')
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