const { Sequelize } = require('sequelize');

// TODO: store credentials in Secrets Manager, point env vars at secrets manager references, create service to retrieve secrets
const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;


const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    dialect: 'postgres',
});

module.exports = sequelize;
