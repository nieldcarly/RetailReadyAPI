const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const PackingStep = sequelize.define('PackingStep', {
    packing_step_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    packing_step_text: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

PackingStep.associate = (models) => {
    PackingStep.belongsTo(models.RoutingGuideItem, {
        foreignKey: {
            name: 'routing_guide_item_id',
            allowNull: false
        },
        as: 'routing_guide_item',
    });
};

module.exports = PackingStep;
