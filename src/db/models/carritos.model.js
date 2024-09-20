const {Model, DataTypes} = require('sequelize');

const CARRITOS_TABLE = 'carritos';

class Carrito extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: CARRITOS_TABLE,
            modelName: 'Carrito',
            timestamps: true,
        };
    }
}

const CarritoSchema = {
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
    idProducto: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'idProducto',
    },
    cantidad: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'cantidad',
    },
    talla: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'talla',
    },
    
};

module.exports = { Carrito, CarritoSchema };