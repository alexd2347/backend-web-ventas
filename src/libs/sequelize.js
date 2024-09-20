const { Sequelize } = require('sequelize');

const { config } = require('../config/config');
const setupModels = require('./../db/models');

const sequelize = new Sequelize(
    config.dbName,
    config.dbUser,
    config.dbPassword,
    {
        host: config.dbHost,
        dialect: 'postgresql',
        dialectOptions: {
        ssl: {
                require: true, // This will help you. But you will see nwe error
                rejectUnauthorized: false // This line will fix new error
        }
        }
    }
);

sequelize.sync({ alter: true });
setupModels(sequelize);

module.exports = sequelize;