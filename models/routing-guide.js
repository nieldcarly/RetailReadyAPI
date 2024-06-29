const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const RoutingGuide = sequelize.define('RoutingGuide', {
    routing_guide_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    routing_guide_url: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

RoutingGuide.associate = (models) => {
    RoutingGuide.belongsTo(models.Brand, {
        foreignKey: {
            name: 'brand_id',
            allowNull: false
        },
        as: 'brand',
    });
};

RoutingGuide.associate = (models) => {
    RoutingGuide.hasMany(models.RoutingGuideItem, {
        foreignKey: {
            name:'routing_guide_id',
            allowNull: false
        },
        as: 'routing_guide',
    });
};

module.exports = RoutingGuide;
