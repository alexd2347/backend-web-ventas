const ProductosService = require('../services/productos.service');
const service = new ProductosService();

const create = async (req, res) => {
    try {
        const { nombre, descripcion, precio, tallas, cantidad, promocion, precioPromocion, tipo, genero } = req.body;

        const response = await service.create({
            nombre, descripcion, precio, tallas, cantidad, promocion, precioPromocion, tipo, genero,
            // Obtener el nombre de las últimas 3 imágenes subidas y enviarlas separadas por comas
            imagenes: req.files.map(file => file.filename).slice(-3).join(','),
        });

        res.json({ success: true, data: response });
    } catch (error) {
        console.error('Error al crear denuncia:', error);
        res.status(500).send({ success: false, message: error.message });
    }
};

const get = async (req, res) => {
    try {
        const response = await service.find();
        res.json(response);
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
};

const getById = async (req, res) => {
    try {
        const response = await service.findOne(req.params.id);
        res.json(response);
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
};

const update = async (req, res) => {
    try {
        const { id, nombre, descripcion, precio, tallas, cantidad, promocion, precioPromocion, tipo, genero, imagenes } = req.body;
        const response = await service.update(id, {
            nombre, descripcion, precio, tallas, cantidad, promocion, precioPromocion, tipo, genero,
            //si imagenes esta vacio se envia vacio, si tiene algo, se obtiene el nombre de las últimas 3 imágenes subidas y enviarlas separadas por comas
            imagenes: imagenes === null ? imagenes : req.files.map(file => file.filename).slice(-3).join(','),
        });

        res.json(response);
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
};

const _delete = async (req, res) => {
    try {
        const response = await service.delete(req.params.id);
        res.json(response);
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
};


module.exports = {
    create,
    get,
    getById,
    update,
    _delete,
};
