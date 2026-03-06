const router = require('express').Router();

const { obtenerProductos } = require('../controllers/productos.controller');

router.get('/api/productos', obtenerProductos);

module.exports = router;