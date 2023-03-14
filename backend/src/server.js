const express = require('express')
//const path = require('path')

//const db = require('./database')
const routes = require('./routes')

const app = express()

//Conexao BD 
//db.connect()

//habilitar server para receber dados via formulario (POST)
app.use(express.urlencoded({extended: true}))

//definição das rotas
app.use('/api', routes)

//executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server on port: ${port}`))
