import { cargarWidgetProducto } from "../inicio/loadWidgetProducto.js";

const categorias = {
    1:"Portátiles",
    2:"Escritorio",
    3:"Componentes",
    4:"Mouses",
    5:"Teclados",
    6:"Monitor",
    7:"Audio",
    8:"Accesorios",
    9:"Cables"
};

export function initCategorias(tipo){
    insertTitle(tipo);
    cargarWidgetProducto("categorias", tipo);
}

function insertTitle(categoriaID){
    const tittle = document.getElementById("Titulo");
    const h1 = document.createElement("h1");
    h1.textContent = categorias[categoriaID];
    tittle.appendChild(h1);
}