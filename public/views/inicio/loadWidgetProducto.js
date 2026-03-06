let plantillaCache = null;

async function obtenerPlantilla(){
    if(!plantillaCache){
    plantillaCache = await fetch("/layouts/widgetProducto.html")
    .then(r=>r.text());
    }
    return plantillaCache;
}

function cargarWidgetProducto(page, typeCat){
    if(page==="inicio"){
        cargarProInicio();
    }else if(page==="categorias"){
        cargarProCategorias(typeCat);
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

async function cargarProCategorias(categoriaID){
    const response = await fetch(`/api/productos?categoria=${categoriaID}`);
    // verificamos si el servidor respondió correctamente
    if(!response.ok){
        throw new Error("Error en la API");
    }
    const productos = await response.json();
    const contenedor = document.getElementById("producto-container");
    contenedor.innerHTML = "";
    const plantillaHTML = await obtenerPlantilla();
    const parser = new DOMParser();
    const doc = parser.parseFromString(plantillaHTML,"text/html");
    const plantilla = doc.querySelector(".VentanaProducto");
    productos.forEach(producto=>{
        const clone = plantilla.cloneNode(true);
        clone.querySelector(".info-title").textContent = producto.nombre;
        clone.querySelector(".infor-precio").textContent = `$${producto.precio}`;
        contenedor.appendChild(clone);
    });

}

export { cargarWidgetProducto };