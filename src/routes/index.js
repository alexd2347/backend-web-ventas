const express = require('express');
const productosRouter = require('./productos.router');
const usuariosRouter = require('./usuarios.router');
const carritosRouter = require('./carritos.router');
const direccionesRouter = require('./direcciones.router');

function routesApi(app) {
    const router = express.Router();
    app.use('/api', router);
    router.use('/productos', productosRouter);
    router.use('/usuarios', usuariosRouter);
    router.use('/carritos', carritosRouter);
    router.use('/direcciones', direccionesRouter);
}

module.exports = routesApi;
