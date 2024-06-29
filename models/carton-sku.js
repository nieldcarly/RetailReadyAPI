const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const CartonSku = sequelize.define('CartonSku', {
    carton_sku_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
});

CartonSku.associate = (models) => {
    CartonSku.belongsTo(models.Carton, {
        foreignKey: {
            name: 'carton_id',
            allowNull: false,
        },
        as: 'carton',
    });
};

CartonSku.associate = (models) => {
    CartonSku.belongsTo(models.Sku, {
        foreignKey: {
            name: 'sku_id',
            allowNull: false,
        },
        as: 'sku',
    });
};

module.exports = CartonSku;
