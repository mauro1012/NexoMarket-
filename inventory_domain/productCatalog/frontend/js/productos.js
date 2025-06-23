const API_URL = "http://localhost:3001/api/productos";

async function fetchProducts() {
    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Error al obtener productos");
        }

        const productos = await response.json();
        mostrarProductos(productos);
    } catch (error) {
        console.error("❌ Error cargando productos:", error);
        alert("No se pudieron cargar los productos.");
    }
}

function mostrarProductos(productos) {
    const productosDiv = document.getElementById("productos");
    productosDiv.innerHTML = ""; 

    productos.forEach(producto => {
        const productoHTML = `
            <div class="producto">
                <h3>${producto.nombre}</h3>
                <p>${producto.descripcion}</p>
                <p>Precio: $${producto.precio}</p>
                <p><strong>Categoría:</strong> ${producto.categoria}</p> <!-- 🆕 Muestra la categoría -->
                <div class="imagenes">
                    ${producto.imagenes.map(img => `<img src="${img}" alt="Producto">`).join("")}
                </div>
            </div>
        `;
        productosDiv.innerHTML += productoHTML;
    });
}

// ✅ Ejecutar al cargar la página
window.onload = fetchProducts;
