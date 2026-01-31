const routes = {
    //Cliente
    inicio: '/views/site/inicio/inicio.html',
    carrito: '/views/site/carrito/carrito.html',
    nosotros: '/views/site/nosotros/nosotros.html',

    //Admin
    admin: '/views/admin/inicio/inicioAdmin.html',
    adminProducto: '/views/admin/producto/productoBoard.html',
    adminInventario: '/views/admin/inventario/inventarioBoard.html',
    adminFacturas: '/views/admin/facturas/facturasBoard.html'
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
        const modulo = await import("/views/site/inicio/inicio.js");
        modulo.initInicio();
        import("/views/site/inicio/loadVentanaProducto.js");
    }

    //Cargar componentes de pagina Carrito
    if (route === "carrito"){
        const modulo = await import("/views/site/carrito/carrito.js");
        modulo.initCarrito();
    }
/*
    if (route === "admin"){
        const modulo = await import("/views/admin/inicio/inicioAdmin.js");
        modulo.initAdmin();
    }
*/
}