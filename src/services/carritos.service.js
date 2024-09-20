const {models} = require('../libs/sequelize');

class CarritosService {
    constructor(){}

    async find() {
        const res = await models.Carrito.findAll();
        return res;
    }

    async findOne(id) {
        const res = await models.Carrito.findByPk(id);
        return res;
    }

    async create(data) {
        const res = await models.Carrito.create(data);
        return res;
    }

    async update(id, data) {
        const res = await models.Carrito.findByPk(id);
        if (!res) {
            throw new Error('Carrito not found');
        }
        const updated = await res.update(data);
        return updated;
    }

    async delete(id) {
        const res = await this.findOne(id);
        if (!res) {
            throw new Error('Carrito not found');
        }
        await res.destroy();
        return res;
    }

    async findByUserId(id) {
        const res = await models.Carrito.findAll({
            where: {
                idUsuario: id,
            }
        });
        return res;
    }
}

module.exports = CarritosService;