router.get('/api/categorias', async(req,res)=>{
    const result = await pool.query('SELECT * FROM categorias');
    res.json(result.rows);
});