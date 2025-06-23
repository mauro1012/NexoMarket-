const API_URL = "http://localhost:3001/api/productos";

document.getElementById("productoForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const descripcion = document.getElementById("descripcion").value;
    const precio = document.getElementById("precio").value;
    const imagenes = document.getElementById("imagenes").value.split(",");
    const categoria = document.getElementById("categoria").value; // 🆕 Nuevo campo

    const producto = { nombre, descripcion, precio, imagenes, categoria };

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(producto),
        });

        if (!response.ok) {
            throw new Error("Error al agregar el producto");
        }

        alert("✅ Producto agregado con éxito");
        window.location.href = "productos.html";
    } catch (error) {
        console.error("❌ Error al agregar producto:", error);
        alert("No se pudo agregar el producto");
    }
});
