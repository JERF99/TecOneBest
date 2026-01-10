const productoContainer = document.getElementById("producto-detalle-container");

function buscarVentana(callback){
    fetch("../html/ventanaProducto.html")
        .then(response => response.text())
        .then(data => {
            callback(data);
        });
}

function cargarVentana(docHTML){
    productoContainer.innerHTML = docHTML;

    productoContainer.style.position = "fixed";
    productoContainer.style.zIndex = "11";
    productoContainer.style.top = "0";
    productoContainer.style.left = "0";

    document.dispatchEvent(new Event("VentanaProductoCargada"));
}

function cerrarVentana(){
    productoContainer.innerHTML = "";
}

document.addEventListener("VentanaProductoCargada", ()=> {
    const closeVentana = document.getElementById("cerrarVentana");

    if(closeVentana){
        closeVentana.addEventListener("click", cerrarVentana);
    }
});

function abrirVentanaProducto() {
    buscarVentana(cargarVentana);
}

export { abrirVentanaProducto };
