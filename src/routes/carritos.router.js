const express = require('express');
const router = express.Router();
const carritosController = require('../controllers/carritos.controller');

router
    .get('/', carritosController.get)
    .get('/:id', carritosController.getById)
    .post('/', carritosController.create)
    .put('/:id', carritosController.update)
    .delete('/:id', carritosController._delete)
    //añadir el obtener carrito por usuario id
    .get('/usuario/:id', carritosController.getByUserId)

module.exports = router;