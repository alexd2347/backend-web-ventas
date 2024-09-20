const { Model, DataTypes } = require('sequelize');

const PRODUCTOS_TABLE = 'productos';

class Producto extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: PRODUCTOS_TABLE,
            modelName: 'Producto',
            timestamps: true,
        };
    }
}

const ProductoSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    nombre: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'nombre',
    },
    descripcion: {
        allowNull: false,
        type: DataTypes.STRING(1000),
        field: 'descripcion',
    },
    precio: {
        allowNull: false,
        type: DataTypes.DECIMAL,
        field: 'precio',
    },
    imagenes: {
        allowNull: true,
        type: DataTypes.STRING(1000),
        field: 'imagenes',
    },
    tallas: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'tallas',
    },
    cantidad: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'cantidad',
    },
    promocion: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        field: 'promocion',
    },
    precioPromocion: {
        allowNull: false,
        type: DataTypes.DECIMAL,
        field: 'precioPromocion',
    },
    tipo: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'tipo',
    },
    genero: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'genero',
    },
};

module.exports = { Producto, ProductoSchema };
