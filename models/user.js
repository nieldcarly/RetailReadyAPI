const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const User = sequelize.define('User', {
    user_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
});

User.associate = (models) => {
    User.belongsTo(models.Brand, {
        foreignKey: {
            name: 'brand_id',
            allowNull: true
        },
        as: 'brand',
    });
};

User.associate = (models) => {
    User.belongsTo(models.Retailer, {
        foreignKey: {
            name:'retailer_id',
            allowNull: true
        },
        as: 'retailer',
    });
};

module.exports = User;
