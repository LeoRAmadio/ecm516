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

const baseObservacoes = {
    
}

//GET /lembretes/1/observacoes () => {}
app.get('/lembretes/:idLembrete/observacoes', (req, res) => {

    const idLembrete = req.params.idLembrete
    res.json(baseObservacoes[idLembrete] || [])

}) //req -> requisicao ; res -> response


app.post('/lembretes/:idLembrete/observacoes', (req, res) =>{

    const idObservacao = uuidv4()
    const { texto } = req.body
    const { idLembrete } = req.params
    const observacao = {
        id: idObservacao,
        idLembrete: idLembrete,
        texto: texto,
    }

    const observacoes = (baseObservacoes[idLembrete] || [])
    observacoes.push(observacao)
    baseObservacoes[idLembrete] = observacoes
    res.status(201).json(observacoes)

})

const port = 5000
app.listen(port, () => {

    console.log(`Observações. Porta ${port}`)

})