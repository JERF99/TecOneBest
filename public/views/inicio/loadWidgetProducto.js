import { abrirVentanaProducto } from "./loadVentanaProducto.js";

function cargarWidgetProducto(page){
    if(page==="inicio"){
        cargarProInicio();
    }else if(page==="categorias"){
        cargarProCategorias();
    }
}

function cargarProInicio(){
    fetch("/layouts/widgetProducto.html")
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

async function cargarProCategorias(){
        try {
        const response = await fetch('/api/productos');

        if (!response.ok) {
            throw new Error("Error en la respuesta del servidor");
        }

        const productos = await response.json();

        const contenedor = document.getElementById("producto-container");

        contenedor.innerHTML = "";

        const fragment = document.createDocumentFragment();

        productos.forEach(producto => {

            const div = document.createElement("div");
            div.classList.add("producto");

            const titulo = document.createElement("h3");
            titulo.textContent = producto.nombre;

            const precio = document.createElement("p");
            precio.textContent = `Precio: $${producto.precio}`;

            div.appendChild(titulo);
            div.appendChild(precio);

            fragment.appendChild(div);
        });
        
        contenedor.appendChild(fragment);

    } catch (error) {
        console.error("Error cargando productos:", error);
    }
}

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("div-verInfo")) {
        abrirVentanaProducto();
    }
});

export { cargarWidgetProducto };