const Producto = require("../models/productoModel");

// Obtener todos los productos
exports.obtenerProductos = async (req, res) => {
    try {
        const productos = await Producto.findAll();
        res.status(200).json(productos);
    } catch (error) {
        console.error("❌ Error al obtener productos:", error);
        res.status(500).json({ error: "Error al obtener productos" });
    }
};

// Crear un nuevo producto
exports.crearProducto = async (req, res) => {
    const { nombre, descripcion, precio, imagenes, categoria } = req.body;

    try {
        const nuevoProducto = await Producto.create({
            nombre,
            descripcion,
            precio,
            imagenes,
            categoria // 🆕 Nuevo campo incluido
        });

        res.status(201).json({ message: "✅ Producto creado exitosamente", producto: nuevoProducto });
    } catch (error) {
        console.error("❌ Error al crear producto:", error);
        res.status(500).json({ error: "Error al crear producto" });
    }
};
