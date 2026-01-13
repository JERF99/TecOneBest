fetch("/html/header.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("header-container").innerHTML = data;
        document.dispatchEvent(new Event("headerCargado"));
});