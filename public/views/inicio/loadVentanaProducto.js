let productoContainer = null;

function crearContenedorSiNoExiste() {
    if (!productoContainer) {
        productoContainer = document.createElement("div");
        productoContainer.id = "producto-detalle-container";
        document.body.appendChild(productoContainer);
    }
}

function buscarVentana(callback){
    fetch("/views/inicio/ventanaProducto.html")
        .then(response => response.text())
        .then(data => {
            callback(data);
        });
}

function cargarVentana(docHTML){
    crearContenedorSiNoExiste();

    productoContainer.innerHTML = docHTML;

    productoContainer.style.position = "fixed";
    productoContainer.style.zIndex = "11";
    productoContainer.style.top = "0";
    productoContainer.style.left = "0";
    productoContainer.style.width = "100vw";
    productoContainer.style.height = "100vh";

    const closeVentana = productoContainer.querySelector("#cerrarVentana");
    closeVentana?.addEventListener("click", cerrarVentana);
}

function cerrarVentana(){
    if (productoContainer) {
        productoContainer.remove();
        productoContainer = null;
    }
}

function abrirVentanaProducto() {
    buscarVentana(cargarVentana);
}

export { abrirVentanaProducto };
