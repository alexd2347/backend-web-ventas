const express = require('express');
const router = express.Router();
const direccionesController = require('../controllers/direcciones.controller');

router
    .get('/', direccionesController.get)
    .get('/:id', direccionesController.getById)
    .post('/', direccionesController.create)
    .put('/:id', direccionesController.update)
    .delete('/:id', direccionesController._delete)
    //añadir el obtener direccion por usuario id
    .get('/usuario/:id', direccionesController.getByUserId)

module.exports = router;