const { models } = require('../libs/sequelize');
const fs = require('fs');
const path = require('path');
class ProductosService {
    constructor() { }

    async find() {
        const res = await models.Producto.findAll();
        return res;
    }

    async findOne(id) {
        const res = await models.Producto.findByPk(id);
        return res;
    }

    async create(data) {
        const res = await models.Producto.create(data);
        return res;
    }

    async update(id, data) {
        try {
            const model = await models.Producto.findByPk(id);
            if (!model) {
                console.error(`Producto con ID ${id} no encontrado`);
                throw new Error('Producto not found');
            }
            console.log('Imagenes service:', data.imagenes);
            if (data.imagenes === null || data.imagenes === undefined || data.imagenes === '') {   
                data.imagenes = model.imagenes;
            }
            const res = await model.update(data);
            console.log('Producto actualizado:', res);
            return res;
        } catch (error) {
            console.error('Error al actualizar producto:', error);
            throw error;
        }
    }


    async delete(id) {
        const res = await this.findOne(id);
        if (!res) {
            throw new Error('Producto not found');
        }
        const imagenes = res.imagenes ? res.imagenes.split(',') : null;
        if (imagenes === null) {
            await res.destroy();
            return res;
        }
        console.log('Aqui si se entra');
        imagenes.forEach(imagen => {
            const imagePath = path.join(__dirname, '../../uploads', imagen);
            console.log('Aqui ya no entra, path: ', imagePath);
            if (fs.existsSync(imagePath)) {
                fs.unlinkSync(imagePath); // Borrar imagen si existe
            } else {
                console.log('Imagen no encontrada:', imagePath);
            }
        });
        console.log('Borrando producto');
        await res.destroy();
        return res;
    }
}

module.exports = ProductosService;
