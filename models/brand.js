const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Brand = sequelize.define('Brand', {
    brand_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

Brand.associate = (models) => {
    Brand.hasMany(models.User, {
        foreignKey: {
            name:'brand_id',
            allowNull: true
        },
        as: 'brand',
    });
};
module.exports = Brand;
