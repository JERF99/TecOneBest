const express = require("express");
const router = express.Router();
const { pool } = require("../../database/connection");

router.get("/productos", async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM producto");
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error obteniendo productos" });
    }
});

module.exports = router;
