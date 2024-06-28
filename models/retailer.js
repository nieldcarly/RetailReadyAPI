const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Retailer = sequelize.define('Retailer', {
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

module.exports = Retailer;
