import { cargarWidgetProducto } from "./loadWidgetProducto.js";
import { abrirVentanaProducto } from "./loadVentanaProducto.js"

export function initInicio() {
    cargarWidgetProducto();
}

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("div-verInfo")) {
        abrirVentanaProducto();
    }
});
