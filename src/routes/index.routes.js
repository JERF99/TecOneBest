const express = require('express');
const router = express.Router();
const path = require('path');
const pool = require('../database');

//Inicio
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../..", "public", "index.html"));
});

// Obtener todos los productos
router.get('/api/productos', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM productos');
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener productos' });
    }
});

module.exports = router;