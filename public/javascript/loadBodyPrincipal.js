import { cargarWidgetProducto } from "./loadWidgetProducto.js";

fetch("html/bodyPrincipal.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("bodyPrincipal-container").innerHTML = data;
        document.dispatchEvent(new Event("BodyCargado"));
        cargarWidgetProducto();
    });