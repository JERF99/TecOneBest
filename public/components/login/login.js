const Login = document.getElementById("login-container");

// Función para traer HTML
export function buscarLogin(callback){
    fetch("/components/login/login.html")
    .then(response => response.text())
    .then(data => {
        callback(data);
    });
}

// Función para mostrar login
export function cargarLogin(docHTML){
    const Login = document.getElementById("login-container");

    Login.innerHTML = docHTML;

    Login.style.position = "fixed";
    Login.style.zIndex = "11";
    Login.style.top = "0";
    Login.style.left = "0";

    // Evento cerrar
    const closeLogin = document.getElementById("cerrarLogin");

    closeLogin.addEventListener("click", () => {
        Login.innerHTML = "";
    });
}

function cerrarLogin(){
    const Login = document.getElementById("login-container");
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