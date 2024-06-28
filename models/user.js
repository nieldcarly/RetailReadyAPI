const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const User = sequelize.define('User', {
    id: {
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
    brand_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'Brand',
            key: 'id'
        }
    },
    retailer_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'Retailer',
            key: 'id'
        }
    }
});

module.exports = User;
