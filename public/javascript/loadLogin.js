const productoContainer = document.getElementById("login-container");

function buscarLogin(callback){
    fetch("../html/login.html")
    .then(response => response.text())
    .then(data => {
        callback(data);
    });
}

function cargarLogin(docHTML){
    productoContainer.innerHTML = docHTML;

    productoContainer.style.position = "fixed";
    productoContainer.style.zIndex = "11";
    productoContainer.style.top = "0";
    productoContainer.style.left = "0";

    document.dispatchEvent(new Event("LoginCargado"));
}

function cerrarLogin(){
    productoContainer.innerHTML = "";
}

document.addEventListener("headerCargado", () => {
    const openLogin = document.getElementById("openLogin");

    openLogin.addEventListener("click", () => {
        buscarLogin(cargarLogin);
    })
})

document.addEventListener("LoginCargado", () => {
    const closeLogin = document.getElementById("cerrarLogin");

    closeLogin.addEventListener("click", () =>{
        cerrarLogin();
    });
})
