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