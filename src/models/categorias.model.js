const pool = require('../database');

const getCategorias = async () => {
    const result = await pool.query('SELECT * FROM categorias');
    return result.rows;
};

module.exports = { getCategorias };
