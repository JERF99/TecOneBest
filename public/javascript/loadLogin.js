const Login = document.getElementById("login-container");

function buscarLogin(callback){
    fetch("../html/login.html")
    .then(response => response.text())
    .then(data => {
        callback(data);
    });
}

function cargarLogin(docHTML){
    Login.innerHTML = docHTML;

    //Estilos de Login
    Login.style.position = "fixed";
    Login.style.zIndex = "11";
    Login.style.top = "0";
    Login.style.left = "0";

    document.dispatchEvent(new Event("LoginCargado"));
}

function cerrarLogin(){
    Login.innerHTML = "";
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

