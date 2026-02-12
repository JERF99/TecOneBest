function cargarWidgetProducto(){
    fetch("/layouts/widgetProducto.html")
        .then(response => response.text())
        .then(data =>{
            const componente = document.getElementById("producto-container");
        });
}