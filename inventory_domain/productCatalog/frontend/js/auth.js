function logout() {
    localStorage.removeItem("token");
    alert("👋 Sesión cerrada.");
    window.location.href = "http://localhost:3000"; // Redirige al login después de cerrar sesión
}
