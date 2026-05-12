const express = require('express')
const { calcularTotal, agregarGasto, listaGastos } = require('./gastos')
const app = express()

app.get('/', (req, res) => {
    res.send('Servidor funcionando')
})

app.listen(3000, () => {
    console.log("Servidor corriendo en puerto 3000")
})

app.get('/gastos', (req, res) => {
    res.json(listaGastos)
})

