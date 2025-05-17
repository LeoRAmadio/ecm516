// Pagina 40 é importante
const axios = require('axios')
const express = require('express')
const { v4: uuidv4 } = require('uuid')
const app = express()
app.use(express.json()) //middleware 
//API: para essa aplicação, é uma coleção de endpoints
//DEFININDO ENDPOINTS
//um endpoint é caracterizado por:
//um método do protocolo http,
//um padrão de acesso,
//uma funcionalidade

/*

{
    1: [
        {
            id: 1001,
            idLembrete: 1,
            texto: Sem açucar
        },

        {
            id:1002, idLembrete: 1, texto: Comprar o pó
        }
    ],

    2: []
}

*/

const baseObservacoes = {}

const funcoes = {
    ObservacaoClassificada: async (observacao) => {
        const observacoes = baseObservacoes[observacao.idLembrete]
        const obsParaAtualizar = observacoes.find(o => o.id === observacao.id)
        obsParaAtualizar.status = observacao.status
        await axios.post('http://localhost:10000/eventos', {
            tipo: 'ObservacaoAtualizada',
            dados: observacao
        })
    }
}

//GET /lembretes/1/observacoes () => {}
app.get('/lembretes/:idLembrete/observacoes', (req, res) => {

    const idLembrete = req.params.idLembrete
    res.json(baseObservacoes[idLembrete] || [])

}) //req -> requisicao ; res -> response


app.post('/lembretes/:idLembrete/observacoes', async (req, res) =>{

    const idObservacao = uuidv4()
    const { texto } = req.body
    const { idLembrete } = req.params
    const observacao = {
        id: idObservacao,
        idLembrete: idLembrete,
        texto: texto,
        status: 'aguardando'
    }

    const observacoes = (baseObservacoes[idLembrete] || [])
    observacoes.push(observacao)
    baseObservacoes[idLembrete] = observacoes
    //Emite um evento dizendo que uma observacao foi criada
    await axios.post('http://localhost:10000/eventos', {
        tipo: "ObservacaoCriada",
        dados: observacao
    })
    res.status(201).json(observacoes)

})

app.post('/eventos', async (req, res) => {
    
    try{
        const evento = req.body
        console.log(evento)
        funcoes[evento.tipo](evento.dados)
    }
    finally{
        res.end()
    }
    
})

const port = 5000
app.listen(port, () => {

    console.log(`Observações. Porta ${port}`)

})