const pool = require('../database');

async function getProductos(categoria){
    if(categoria){
    const result = await pool.query(
    'SELECT * FROM productos WHERE categoria_id = $1',
    [categoria]
    );
    return result.rows;
    }
    const result = await pool.query('SELECT * FROM productos');
    return result.rows;
    }

module.exports = { getProductos };