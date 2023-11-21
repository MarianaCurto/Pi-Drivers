const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Team' , {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false
        }
    })
}