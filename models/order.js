const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Order = sequelize.define('Order', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    brand_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'Brand',
            key: 'id'
        }
    },
    retailer_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'Retailer',
            key: 'id'
        }
    }
});

module.exports = Order;
