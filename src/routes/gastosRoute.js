const express = require('express')
const router = express.Router()
const {obtenerGastos, agregarGasto} = require("../controllers/gastosController")

router.get("/", obtenerGastos)
router.post("/", agregarGasto)

module.exports = router 