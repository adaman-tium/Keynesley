
let listaGastos = []

let gasto1 = {
    monto:350,
    categoria: "Comida",
    fecha: "2026-05-12"
}

listaGastos.push(gasto1)

function agregarGasto(monto,categoria,fecha){
    let gasto = {
        monto: monto,
        categoria: categoria,
        fecha: fecha
    }
    listaGastos.push(gasto)
}

agregarGasto(50, "Necesidad","2026-05-11")

function calcularTotal(){
    let total = 0
    for (let gasto of listaGastos){
        total = total + gasto.monto
    }
    return total
}


console.log(listaGastos)
console.log(calcularTotal())


module.exports = {agregarGasto, calcularTotal, listaGastos}