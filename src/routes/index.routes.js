const express = require('express');
const router = express.Router();
const path = require('path');

//Inicio
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../..", "public", "index.html"));
});

//Productos Pagina Principal
const productosRoutes = require("./product.routes");

//API Productos
router.use("/api", productosRoutes);

module.exports = router;