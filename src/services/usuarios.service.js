const { models } = require('../libs/sequelize');

class UsuariosService {
    constructor(){}

    async find() {
        const res = await models.Usuario.findAll();
        return res;
    }

    async findOne(id) {
        const res = await models.Usuario.findByPk(id);
        return res;
    }

    async create(data) {
        const res = await models.Usuario.create(data);
        return res;
    }

    async update(id, data) {
        const model = await models.Usuario.findByPk(id);
        if (!model) {
            throw new Error('Usuario not found');
        }
        const res = await model.update(data);
        return res;
    }

    async login(email, password) {
        const res = await models.Usuario.findOne({
            where: {
                email,
                password,
            }
        });
        return res;
    }

    async delete(id) {
        const res = await models.Usuario.destroy({
            where: {
                id
            }
        });
        return res;
    }
}

module.exports = UsuariosService;