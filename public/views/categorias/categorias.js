import { cargarWidgetProducto } from "../inicio/loadWidgetProducto.js";

export function initCategorias(tipo){

    insertToDOM(tipo);
    cargarWidgetProducto("categorias");

    
}

function insertToDOM(cateType){
    const tittle = document.getElementById("Titulo");
    const h1 = document.createElement("h1");
    h1.textContent = cateType;

    tittle.appendChild(h1);
}