const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Carton = sequelize.define('Carton', {
    carton_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    sku_quantity: {
        type: DataTypes.INTEGER
    }
});

Carton.associate = (models) => {
    Carton.belongsTo(models.Pallet, {
        foreignKey: {
            name: 'pallet_id',
            allowNull: false,
        },
        as: 'pallet',
    });
};

Carton.associate = (models) => {
    Carton.hasMany(models.CartonSku, {
        foreignKey: {
            name: 'carton_id',
            allowNull: false,
        },
        as: 'carton',
    });
};

module.exports = Carton;
