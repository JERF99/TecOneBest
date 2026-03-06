import { cargarWidgetProducto } from "./loadWidgetProducto.js";
import { loadCategoria } from "../../javascript/router.js";
import "../../javascript/events.js";

export function initInicio() {
    cargarWidgetProducto("inicio");
}

//Ver productos por categorias
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("img-categoria")) {
        const categoria = e.target.closest(".categoria-opcion");
        if (!categoria) return;
        const categoriaID = categoria.dataset.categoria;
        loadCategoria("categorias", categoriaID);
    }
});
