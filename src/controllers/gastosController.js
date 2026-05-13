let listaGastos = []

const obtenerGastos = (req, res) => {
    res.json(listaGastos)
}

const agregarGasto = (req, res) => {
    const {monto, categoria, fecha} = req.body
    const nuevoGasto = {monto, categoria, fecha}
    listaGastos.push(nuevoGasto)
    res.json({mensaje: "Gasto agregado", gastos: listaGastos})
}

module.exports = {obtenerGastos, agregarGasto}