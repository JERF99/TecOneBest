import { cargarWidgetProducto } from "./loadWidgetProducto.js";
import { abrirVentanaProducto } from "./loadVentanaProducto.js"
import { loadRoute } from "../../javascript/router.js";

export function initInicio() {
    cargarWidgetProducto();
}

//Ver mas información Producto
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("div-verInfo")) {
        abrirVentanaProducto();
    }
});

//Ver productos por categorias
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("img-categoria")) {
        loadRoute("categorias");
    }
});
