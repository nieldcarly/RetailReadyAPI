const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Brand = sequelize.define('Brand', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Brand;
