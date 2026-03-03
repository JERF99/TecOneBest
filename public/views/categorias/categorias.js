import { cargarWidgetProducto } from "../inicio/loadWidgetProducto.js";

export function initCategorias(tipo){
    insertTitle(tipo);
    cargarWidgetProducto("categorias");
}

function insertTitle(cateType){
    const tittle = document.getElementById("Titulo");
    const h1 = document.createElement("h1");
    h1.textContent = cateType;
    tittle.appendChild(h1);
}