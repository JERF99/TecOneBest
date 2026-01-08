fetch("html/bodyPrincipal.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("bodyPrincipal-container").innerHTML = data;
        document.dispatchEvent(new Event("BodyCargado"));

        loadPlantillaProducts();
        verMasInformacion();
    });

function loadPlantillaProducts(){
    fetch("html/widgetProducto.html")
        .then(response => response.text())
        .then(htmlPlantilla => {
            
            const contenedor = document.getElementById("producto-container");

            // EJEMPLO: crear 5 tarjetas
            for (let i = 1; i <= 5; i++) {
                contenedor.innerHTML += htmlPlantilla;
            }
        });
}

function verMasInformacion(){
    document.addEventListener("click", function (e) {
        if (e.target.classList.contains("div-verInfo")) {
            mostrarProducto();
        }
    });
}

function mostrarProducto() {
    fetch("html/producto.html")
        .then(response => response.text())
        .then(html => {
            document.getElementById("producto-detalle-container").innerHTML = html;
        });
}




/*  loadProductos();
async function loadProductos() {
    const res = await fetch("/api/productos");
    const productos = await res.json();

    const contenedor = document.getElementById("lista-productos");

    const plantillaRes = await fetch("/html/plantillaProducto.html");
    const plantilla = await plantillaRes.text();

    productos.forEach(p => {
        let card = plantilla
            .replace(/{{id}}/g, p.id)
            .replace(/{{nombre}}/g, p.nombre)
            .replace(/{{precio}}/g, p.precio)
            .replace(/{{img}}/g, p.imagen_url);

        contenedor.innerHTML += card;
    });
}
*/