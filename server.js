const express = require('express')
const { calcularTotal, agregarGasto, listaGastos } = require('./gastos')
const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Servidor funcionando')
})

app.listen(3000, () => {
    console.log("Servidor corriendo en puerto 3000")
})

app.get('/gastos', (req, res) => {
    res.json(listaGastos)
})

app.post('/gastos', (req,res) => {
    const {monto, categoria, fecha} = req.body
    agregarGasto(monto, categoria, fecha)
    res.json({mensaje: "Gasto agregado", gastos: listaGastos})
})
