function cargarResumenCarrito(){
    fetch("/views/carrito/widgetResumenCarrito.html")
        .then(response => response.text())
        .then(html => {
            document.getElementById("widget-resumen-container").innerHTML = html;
        });
}

export { cargarResumenCarrito };