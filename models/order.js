const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Order = sequelize.define('Order', {
    order_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
});

Order.associate = (models) => {
    Order.belongsTo(models.Retailer, {
        foreignKey: {
            name:'retailer_id',
            allowNull: false,
        },
        as: 'retailer',
    });
};

Order.associate = (models) => {
    Order.belongsTo(models.Brand, {
        foreignKey: {
            name:'brand_id',
            allowNull: false,
        },
        as: 'brand',
    });
};

module.exports = Order;
