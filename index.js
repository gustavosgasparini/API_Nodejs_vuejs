const mongoose = require('mongoose')
const express = require('express')
const fatura = require('./routes/fatura')
const cors = require('cors')
const app =  express()
const port = process.env.PORT || 5000

mongoose.connect('mongodb://localhost/fatura', { useNewUrlParser:true })
    .then(() => console.log('Conectado ao MongoDB...'))
    .catch((err) => console.error('Nao foi possivel se conectar ao MongoDB', err))

app.use(express.json())
app.use(cors())
app.use('/api/fatura', fatura)

app.listen(port, () => console.log(`Rodando na porta http://localhost:${port}`))