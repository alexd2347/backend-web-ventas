const { Model, DataTypes } = require('sequelize');

const DIRECCIONES_TABLE = 'direcciones';

class Direccion extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: DIRECCIONES_TABLE,
            modelName: 'Direccion',
            timestamps: true,
        };
    }
}

const DireccionSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    idUsuario: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'idUsuario',
    },
    nombre: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'nombre',
    },
    apellido: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'apellido',
    },
    telefono: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'telefono',
    },
    calle: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'calle',
    },
    numero: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'numero',
    },
    colonia: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'colonia',
    },
    codigoPostal: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'codigo_postal',
    },
    referencias: {
        allowNull: true,
        type: DataTypes.STRING,
        field: 'referencias',
    },
    ciudad_municipio: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'ciudad_municipio',
    },
    estado: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'estado',
    },

};

module.exports = { Direccion, DireccionSchema };