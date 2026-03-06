import { abrirVentanaProducto } from "../views/inicio/loadVentanaProducto.js";

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("div-verInfo")) {
        abrirVentanaProducto();
    }
});