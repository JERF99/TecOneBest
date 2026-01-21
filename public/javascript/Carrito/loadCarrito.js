fetch("/html/Carrito/carrito.html")
    .then(response => response.text())
    .then(data =>{
        document.getElementById("carrito-container").innerHTML = data;
        document.dispatchEvent(new Event("bodyCarrito-cargado"));
    });