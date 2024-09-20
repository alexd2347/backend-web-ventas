const {models} = require('../libs/sequelize');

class DireccionesService {
    constructor(){}

    async find() {
        const res = await models.Direccion.findAll();
        return res;
    }
    async findOne(id) {
        const res = await models.Direccion.findByPk(id);
        return res;
    }

    async create(data) {
        const res = await models.Direccion.create(data);
        return res;
    }

    async update(id, data) {
        const model = await models.Direccion.findByPk(id);
        if (!model) {
            throw new Error('Direccion not found');
        }
        const res = await model.update(data);
        return res;
    }

    async delete(id) {
        const res = await this.findOne(id);
        if (!res) {
            throw new Error('Direccion not found');
        }
        await res.destroy();
        return res;
    }

    async findByUserId(id) {
        const res = await models.Direccion.findAll({
            where: {
                idUsuario: id,
            }
        });
        return res;
    }

}

module.exports = DireccionesService;