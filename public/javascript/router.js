const routes = {
    inicio: '/views/inicio/inicio.html',
    carrito: '/views/carrito/carrito.html',
    nosotros: '/views/nosotros/nosotros.html',
    dashboard: '/views/dashboard/dashboard.html'
};

export async function loadRoute(route) {
    const path = routes[route];
    if (!path) return;

    const html = await fetch(path).then(r => r.text());
    document.getElementById("app").innerHTML = html;

    //Resetear Scroll
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant" // o "smooth"
    });

    //Cargar componentes de pagina Inicio
    if (route === "inicio") {
        const modulo = await import("/views/inicio/inicio.js");
        modulo.initInicio();
        import("/views/inicio/loadVentanaProducto.js");
    }

    //Cargar componentes de pagina Carrito
    if (route === "carrito"){
        const modulo = await import("/views/carrito/carrito.js");
        modulo.initCarrito();
    }
    
}