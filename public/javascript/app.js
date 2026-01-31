import { loadRoute } from "./router.js";

function loadLayout(type) {
    if (type === "admin") {
        import("../components/admin/header/loadHeader.js");
        import("../components/admin/footer/loadFooter.js");
    } else {
        import("../components/site/header/loadHeader.js");
        import("../components/site/footer/loadFooter.js");
        import("../views/site/login/loadLogin.js");
    }
}

export function navigate(route) {
    const isAdmin = route.startsWith("admin");

    loadLayout(isAdmin ? "admin" : "site");
    loadRoute(route);
}



navigate("inicio");
