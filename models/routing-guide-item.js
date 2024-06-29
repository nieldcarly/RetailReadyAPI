const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const RoutingGuideItem = sequelize.define('RoutingGuideItem', {
    routing_guide_item_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

RoutingGuideItem.associate = (models) => {
    RoutingGuideItem.belongsTo(models.RoutingGuide, {
        foreignKey: {
            name: 'routing_guide_id',
            allowNull: false
        },
        as: 'routing_guide',
    });
};

RoutingGuideItem.associate = (models) => {
    RoutingGuideItem.hasMany(models.PackingStep, {
        foreignKey: {
            name:'routing_guide_item_id',
            allowNull: false
        },
        as: 'routing_guide_item',
    });
};

RoutingGuideItem.associate = (models) => {
    RoutingGuideItem.hasMany(models.Sku, {
        foreignKey: {
            name:'routing_guide_item_id',
            allowNull: false
        },
        as: 'routing_guide_item',
    });
};

module.exports = RoutingGuideItem;
