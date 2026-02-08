function cargarWidgetCarrito(){
    fetch("/views/carrito/widgetCarrito.html")
        .then(response => response.text())
        .then(html => {
            const docHtml = document.getElementById("widget-carrito-container");
            //Cantidad de productos añadidos al carrito
            for (let index = 0; index < 3; index++) {
                docHtml.innerHTML += html;
            }
        });
}

export { cargarWidgetCarrito };