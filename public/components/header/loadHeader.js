import { loadRoute } from "/javascript/router.js";

fetch("/components/header/header.html")
    .then(res => res.text())
    .then(html => {
        document.getElementById("header-container").innerHTML = html;

    const loginBtn = document.getElementById("openLogin");

    loginBtn?.addEventListener("click", e => {
        e.preventDefault();
        window.abrirLogin();
    });

    document.addEventListener("click", async (e) => {
    const link = e.target.closest("a[data-route]");
    if (!link) return;

    e.preventDefault();

    const route = link.dataset.route;
    const scrollTarget = link.dataset.scroll;

    await loadRoute(route);

    if (scrollTarget) {
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                const section = document.getElementById(scrollTarget);
                    if (section) {
                        section.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });
                    }
                });
            });
        }
    });
});
