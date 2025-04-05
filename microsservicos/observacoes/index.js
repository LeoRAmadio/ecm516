const express = require('express')
const app = express()
//API: para essa aplicação, é uma coleção de endpoints
//DEFININDO ENDPOINTS
//um endpoint é caracterizado por:
//um método do protocolo http,
//um padrão de acesso,
//uma funcionalidade

//GET /lembretes () => {}
app.get('/lembretes', (req, res) => {}) //req -> requisicao ; res -> response