const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Pallet = sequelize.define('Pallet', {
    pallet_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
});

Pallet.associate = (models) => {
    Pallet.belongsTo(models.Order, {
        foreignKey: {
            name: 'order_id',
            allowNull: false,
        },
        as: 'order',
    });
};

Pallet.associate = (models) => {
    Pallet.hasMany(models.Carton, {
        foreignKey: {
            name: 'pallet_id',
            allowNull: false,
        },
        as: 'pallet',
    });
};

module.exports = Pallet;
