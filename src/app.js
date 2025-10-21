const express = require('express');
const app = express();

const routes = require('./routes/index.routes');
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

//Implementación de Rutas
app.use('/', routes);

app.listen(3000);
console.log(`Server on Port: ${3000}`);