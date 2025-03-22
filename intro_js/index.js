// *** PROMISE *** //


// caso n seja negativo, devolva uma promise no estado rejected com a mensagem de erro: "Apenas positivos, por favor".
// caso contrario, mantenha o que já está pronto
// não pode usar nem if/else nem switch/case
// a primeira instrucao e unica deve ser o return

const calculoDesafio = (n) => {
    return n < 0 
    ? Promise.reject('Apenas positivos, por favor')
    : Promise.resolve((n / 2) * (n + 1))
}

const resultado = calculoDesafio(-10)
resultado.then(res => {
     console.log(`Funcionou rapidinho ${res}`)
})

.catch(err => {
    console.log(`Erro: ${err}`)
})

// const calculoRapidinho = (n) => {

//     return Promise.resolve((n / 2) * (n + 1))
//     // return new Promise((resolve, reject) => {
//     //     resolve((n / 2) * (n + 1))
//     // })
// }

// const resultado = calculoRapidinho(10)
// resultado.then(res => {
//     console.log(`Funcionou rapidinho ${res}`)
// })



//1 + 2 + 3 + ... + (n-2) + (n-1) + n
// function calculoDemorado(n){
//     let ac = 0
//     for(let i = 1; i<=n; i++) ac += 1
//     return ac
// }

// function calculoDemorado(n){
//     const p = new Promise((resolve, reject) => {
//         let ac = 0
//         for(let i = 1; i<=n; i++) ac += 1
//         resolve(ac)
//     })
//     return p
// }

// const resultado = calculoDemorado(10) //resolve os problemas da ordem dos parametros
// //execute essa instrucao demorada e entao faça isso:
// resultado.then((res) => {
//     console.log(`Funcionou: ${res}`)
// })
// .catch(function(err){
//     console.log(`Erro: ${err}`)
// })



// const resultado1 = calculoDemorado(10) //Mas mantêm o problema do hadouken (código vai crescendo para a direita)
// //execute essa instrucao demorada e entao faça isso:
// resultado.then((res1) => {
//     console.log(`Funcionou: ${res1}`)
//     calculoDemorado(res1).then((res2) =>{
//         console.log(`Funcionou (2): ${res2}`)

//     })
// })
// .catch(function(err){
//     console.log(`Erro: ${err}`)
// })


console.log('----')
//processamento síncrono (bloqueante) e processamento assíncrono (não bloqueante)

// //síncrono
// const oi = () => console.log('oi')

// console.log('Começou')
// oi()
// console.log('Terminou')
 
//assíncrono ; debugando é mais facil de ver (inferno de callbacks)
// const fs = require('fs')
// const abrirArquivo = function(nomeArquivo){
//     const exibirConteudo = function(erro, conteudo){
//         if(erro){
//             console.log(`Deu erro: ${erro}`)
//         }
//         else{
//             console.log(`Funcionou: ${conteudo.toString()}`)
//             const dobro = Number(conteudo.toString()) * 2
//             const finalizar = (erro) => {
//                 if(erro)
//                     console.log(`A escrita deu erro ${erro}`)
//                 else
//                     console.log('A escrita funcionou')
//             }
//             fs.writeFile('dobro.txt', dobro.toString(), finalizar)

//         }
//     } //callback
//     //assincrona
//     fs.readFile(nomeArquivo, exibirConteudo)
//     console.log('Fim da função exibirConteudo')
// }

// abrirArquivo("arquivo.txt")

//IO-Bound: Input/Output


console.log("----")
// *** JSON *** //
//uma pessoa que se chama João e tem 17 anos
// const pessoa = {
//     nome: "João",
//     idade: 17
// }

// console.log(pessoa.nome)
// console.log(pessoa['idade'])

//uma pessoa se chama Maria, tem 21 anos e mora na Rua B, numero 121, bairro J

// const pessoa = {
//     nome: "Maria",
//     idade: 21,
//     endereco: {
//         logradouro: "B",
//         numero: 121,
//         bairro: {
//             nome: "J"
//         },
//         cidade: {
//             nome: "Itu",
//             populacao: 70000
//         }
//     }
// }

// console.log(pessoa.endereco.bairro.nome)
// console.log(pessoa['endereco']['cidade']['populacao'])

// uma concessionaria tem CNPJ e endereco. Ela possui alguns carros. cada carro tem marca, modelo, e ano de fabricacao
// const concessionaria = {
//     cnpj: "123456",
//     endereco: {
//         logradouro: "Rua B",
//         numero: 121
        
//     },
//     veiculos: [
//         {
//             marca: "X",
//             modelo: "W",
//             fabricacao: 2020
//         },
//         {
//             marca: "V",
//             modelo: "Z",
//             fabricacao: 2022
//         },
//         {
//             marca: "GM",
//             modelo: "Tracker",
//             fabricacao: 2025
//         }
//     ]
// }

// console.log(concessionaria.veiculos[2].modelo)

// for (let i = 0; i < concessionaria.veiculos.length; i++){
//     console.log(concessionaria.veiculos[i])
// }

// for (let veiculo of concessionaria.veiculos){
//     console.log(veiculo)
// }

// uma calculadora que faz as operacoes de soma e subtracao, cada uma envolvendo apenas dois operandos
//1. A soma deve ser feita com uma funcao regular(function)
//2. A subtracao deve ser feita com uma arrow function cujo corpo não pode ter nem {} e nem return
//no final, mostre ela em funcionamento, ou seja, some 2 com 3 e subtraia 3 de 5


// const calculadora = {
 
//     soma: function(a, b) { return a + b},
//     subtracao: (a, b) => a - b

// }
 
// console.log(calculadora.soma(2,3))
// console.log(calculadora.subtracao(5,3))

// const armazenaSoma = calculadora.soma
// console.log(armazenaSoma(4,5))

console.log('----')
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