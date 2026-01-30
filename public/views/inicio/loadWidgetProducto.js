import { abrirVentanaProducto } from "./loadVentanaProducto.js";

function cargarWidgetProducto(){
    fetch("/views/inicio/widgetProducto.html")
    .then(response => response.text())
    .then(htmlPlantilla => {
        
        const contenedor1 = document.getElementById("producto-container-ofertas");
        const contenedor2 = document.getElementById("producto-container-lonuevo");
        const contenedor3 = document.getElementById("producto-container-masvendido");

        //Se muestran 4 productos con ofertas
        for (let i = 1; i <= 4; i++) {
            contenedor1.innerHTML += htmlPlantilla;
        }

        //Se muestran 2 productos nuevos
        for (let i = 1; i <= 2; i++) {
            contenedor2.innerHTML += htmlPlantilla;
        }
        //Se muestran 2 productos mas vendidos
        for (let i = 1; i <= 2; i++) {
            contenedor3.innerHTML += htmlPlantilla;
        }

    });
}

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("div-verInfo")) {
        abrirVentanaProducto();
    }
});

export { cargarWidgetProducto };