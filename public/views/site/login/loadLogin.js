let ventanaLogin = null;

function crearContenedorSiNoExiste() {
    if (!ventanaLogin) {
        ventanaLogin = document.createElement("div");
        ventanaLogin.id = "ventanaLogin-detalle-container";
        document.body.appendChild(ventanaLogin);
    }
}

function buscarLogin(callback){
    fetch("/views/site/login/login.html")
    .then(response => response.text())
    .then(data => {
        callback(data);
    });
}

function cargarLogin(docHTML){
    ventanaLogin.innerHTML = docHTML;

    ventanaLogin.style.position = "fixed";
    ventanaLogin.style.zIndex = "11";
    ventanaLogin.style.top = "0";
    ventanaLogin.style.left = "0";

    const closeVentana = ventanaLogin.querySelector("#cerrarLogin");
    closeVentana?.addEventListener("click", cerrarVentana);
}

function cerrarVentana(){
    if (ventanaLogin) {
        ventanaLogin.remove();
        ventanaLogin = null;
    }
}

function abrirLogin() {
    crearContenedorSiNoExiste();
    buscarLogin(cargarLogin);
}

window.abrirLogin = abrirLogin;
