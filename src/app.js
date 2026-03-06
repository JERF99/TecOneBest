require('./database');

const express = require('express');
const app = express();

const productosRoutes = require('./routes/productos.routes');
const routes = require('./routes/index.routes');
const path = require('path');

//TecOneBest Website
app.use(express.static(path.join(__dirname, '..', 'public')));

//Admin Dashboard
app.use('/admin', express.static(path.join(__dirname, '..', 'admin')));


//Implementación de Rutas
app.use('/', routes);

//Llamando Productos
app.use(productosRoutes);

app.listen(3000);
console.log(`Server on Port: ${3000}`);