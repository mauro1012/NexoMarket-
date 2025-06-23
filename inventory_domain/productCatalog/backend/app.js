const express = require("express");
const path = require("path");
require("dotenv").config();

const productoRoutes = require("./routes/productoRoutes");
const app = express();

// 📌 Middleware
app.use(express.json());

// 📌 Servir el frontend (Archivos estáticos)
const frontendPath = path.join(__dirname, "../frontend");
app.use(express.static(frontendPath));

// 📌 Rutas de API
app.use("/api", productoRoutes);

// 📌 Redirigir cualquier otra ruta a `productos.html`
app.get("*", (req, res) => {
    res.sendFile(path.join(frontendPath, "productos.html"));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`✅ Servidor de Productos corriendo en http://localhost:${PORT}`));
