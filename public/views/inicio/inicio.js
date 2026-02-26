import { cargarWidgetProducto } from "./loadWidgetProducto.js";
import { abrirVentanaProducto } from "./loadVentanaProducto.js"
import { loadCategoria, loadRoute } from "../../javascript/router.js";

export function initInicio() {
    cargarWidgetProducto("inicio");
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
        const categoria = e.target.closest(".categoria-opcion");
        if (!categoria) return;
        const parametro = categoria.dataset.parametro;
        loadCategoria("categorias", parametro);
    }
});
