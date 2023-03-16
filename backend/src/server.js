const express = require('express')

const db = require('./database/db')
const routes = require('./routes')

const app = express()

//Conexao BD 
db.connect()

//habilitar server para receber JSON
app.use(express.json())

//definição das rotas
app.use('/api', routes)

//executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server on port: ${port}`))
