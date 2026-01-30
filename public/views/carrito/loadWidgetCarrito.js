function cargarWidgetCarrito(){
    fetch("/views/carrito/widgetCarrito.html")
        .then(response => response.text())
        .then(html => {
            document.getElementById("widget-carrito-container").innerHTML = html;
        });
}

export { cargarWidgetCarrito };