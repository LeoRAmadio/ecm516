//************ ASYNC/AWAIT ****************//

// function hello(nome){
//     return `Oi, ${nome}`
// }
// //Sincrono
// const res = hello('Ana')
// console.log(res)
// console.log('Acabou')

// async function hello(nome){
//     return `Oi, ${nome}`
// }
// //Assincrono
// hello('Ana').then(res => console.log(res))
// //console.log(res)
// console.log('Acabou')

// const hello = async(nome) => {
//     return `Oi, ${nome}`
// }

const fatorial = (n) => {
    if(n < 0) return Promise.reject('Apenas valores positivos')
    let res = 1
    for(let i = 2 ; i <= n; i++) res *= i
    return Promise.resolve(res)
}

const comThenCatch = () => {
    fatorial(10)
    .then(res => console.log(`Resultado: ${res}`))
    .catch(err => console.log(`Erro: ${err}`))
    fatorial(-10)
    .then(res => console.log(`Resultado: ${res}`))
    .catch(err => console.log(`Erro: ${err}`))
}

comThenCatch()

const comAsyncAwait = async () => { 

    try{
        const f1 = await fatorial(10) //await -> nao quero a promise que fatorial retorna, quero o valor que a promise retorna. De maneira assincrona
        console.log(f1)

    }
    catch(err){
        console.log(`Erro: ${err}`)
    }

    try{
        const f2 = await fatorial(-10)
        console.log(f2)
    }

    catch(err){
        console.log(`Erro: ${err}`)
    }

}


//**************API**************//

// const axios = require('axios')
// const n = 1743260400
// console.log(new Date(n * 1000).toISOString())
// const q = 'Itu'
// const appid = 'e5a136dfc1bd74ac503a3ed86f631d08'
// const cnt = '2'
// const units = 'metric'
// const lang = 'pt_br'
// const baseURL = 'api.openweathermap.org/data/2.5/forecast'
// const url = `https://${baseURL}?q=${q}&appid=${appid}&cnt=${cnt}&units=${units}&lang=${lang}`
// console.log(url)
// axios.get(url) //faça essa computacao demorada e entao
// .then((res) => {
//     console.log(res.data)
//     console.log('*************************************************')
//     return res.data
// })
// .then(function(res){
//     console.log(`cnt: ${res.cnt}`)
//     console.log('*************************************************')
//     return res
// })
// .then(abc => {
//     //mostrar a temperatura máxima da primeira previsão
//     //devolver apenas a lista de previsões a  seguir
//     console.log(`Temperatura máxima da primeira previsão: ${abc.list[0].main.temp_max}`)
//     console.log('*************************************************')
//     return {list : abc.list, city: abc.city}
// })
// .then(res => {
//     //para cada previsão, mostrar:
//     //descrição, sensação térmica, nascer e por do sol

//     for(let previsao of res.list){
//         console.log(`${previsao.weather[0].description}`)
//         console.log(`${previsao.main.feels_like}\u00B0`)
//     }
//     console.log('*************************************************')
//     console.log(`Nascer do sol: ${new Date(res.city.sunrise * 1000).toLocaleTimeString()}`)
//     console.log(`Pôr do sol: ${new Date(res.city.sunset * 1000).toLocaleTimeString()}`)
//     // axios.get(res.url1).then(res => {
//     //     axios.get(res.url2).then(res3 => {

//     //     })
//     // })
// })
