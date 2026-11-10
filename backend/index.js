const express = require('express')
const cors = require('cors')
const app = express()

const hostname = 'localhost'
const port = 3000

const authMiddleware = require('./middleware/auth.middleware')

const funcionarioController = require('./controller/funcinario.controller')
const FornecedorController = require('./controller/Fornecedor.controller')
const authController = require('./controller/auth.controller')


//MIDDLEWARE

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

//ROTAS PUBLICAS

app.post('/funcionario', funcionarioController.cadastrar)
app.post('/login', authController.login)

app.use(authMiddleware)

//ROTAS PRIVADAS

app.post('/fornecedor', FornecedorController.cadastrar)

app.listen(port, hostname, ()=>{
    console.log(`servidor rodando em http://${hostname}:${port}`)
})