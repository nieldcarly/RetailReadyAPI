const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Sku = sequelize.define('Carton', {
    sku_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
});

// NOTE: This assumes a carton will only contain one type of SKU
Sku.associate = (models) => {
    Sku.hasMany(models.CartonSku, {
        foreignKey: {
            name: 'sku_id',
            allowNull: false,
        },
        as: 'sku',
    });
};

Sku.associate = (models) => {
    Sku.belongsTo(models.RoutingGuideItem, {
        foreignKey: {
            name: 'routing_guide_item_id',
            allowNull: false
        },
        as: 'routing_guide_item',
    });
};

module.exports = Sku;
