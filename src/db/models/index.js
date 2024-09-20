const { Producto, ProductoSchema } = require('./productos.model');
const { Usuario, UsuarioSchema } = require('./usuarios.model');
const { Carrito, CarritoSchema } = require('./carritos.model');
const { Direccion, DireccionSchema } = require('./direcciones.model');
function setupModels(sequelize) {
    Producto.init(ProductoSchema, Producto.config(sequelize));
    Usuario.init(UsuarioSchema, Usuario.config(sequelize));
    Carrito.init(CarritoSchema, Carrito.config(sequelize));
    Direccion.init(DireccionSchema, Direccion.config(sequelize));
}

module.exports = setupModels;
