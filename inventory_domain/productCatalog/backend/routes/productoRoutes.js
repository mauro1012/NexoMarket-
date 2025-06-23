const express = require("express");
const router = express.Router();
const productoController = require("../controllers/productoController");

// Rutas para productos
router.get("/productos", productoController.obtenerProductos);
router.post("/productos", productoController.crearProducto);

module.exports = router;
