
let listaGastos = []

let gasto1 = {
    monto:350,
    categoria: "comida",
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

console.log(listaGastos)