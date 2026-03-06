const { getProductos } = require('../models/productos.model');

async function obtenerProductos(req,res){
    try{
        // captura la categoria enviada por el frontend
        const categoria = req.query.categoria;
        // consulta a la base de datos
        const productos = await getProductos(categoria);
        // responde al frontend
        res.json(productos);
    }
    catch(error){
        console.error("Error en obtenerProductos:", error);
        res.status(500).json({
            error:'Error servidor'
        });
    }
}

async function obtenerCategorias(req,res){
    const result = await pool.query("SELECT * FROM categorias");
    res.json(result.rows);
}

module.exports = { obtenerProductos };