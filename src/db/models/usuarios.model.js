const {Model, DataTypes} = require('sequelize');

const USUARIOS_TABLE = 'usuarios';

class Usuario extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: USUARIOS_TABLE,
            modelName: 'Usuario',
            timestamps: true,
        };
    }
}

const UsuarioSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'name',
    },
    email: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'email',
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'password',
    },
    rol: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'rol',
    },
    estado: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        field: 'estado',
    },
    idGoogle: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'idGoogle',
    },
    telefono: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'telefono',
    },
};

module.exports = {
    Usuario,
    UsuarioSchema,
};