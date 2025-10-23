fetch("/html/footer.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("footer-container").innerHTML = data;
        document.dispatchEvent(new Event("footerCargado"));
    });