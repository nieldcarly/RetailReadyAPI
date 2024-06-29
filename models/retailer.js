const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Retailer = sequelize.define('Retailer', {
    retailer_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

Retailer.associate = (models) => {
    Retailer.hasMany(models.User, {
        foreignKey: {
            name:'retailer_id',
            allowNull: true
        },
        as: 'retailer',
    });
};


module.exports = Retailer;
