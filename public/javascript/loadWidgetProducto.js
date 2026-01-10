import { abrirVentanaProducto } from "./loadVentanaProducto.js";

function cargarWidgetProducto(){
    fetch("html/widgetProducto.html")
    .then(response => response.text())
    .then(htmlPlantilla => {
        
        const contenedor = document.getElementById("producto-container");
        
        //Se muestran 5 productos con ofertas
        for (let i = 1; i <= 5; i++) {
            contenedor.innerHTML += htmlPlantilla;
        }
    });
}

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("div-verInfo")) {
        abrirVentanaProducto();
    }
});

export { cargarWidgetProducto };