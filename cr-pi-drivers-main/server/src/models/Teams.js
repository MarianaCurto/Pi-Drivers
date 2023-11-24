const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   const Teams = sequelize.define('Teams' , {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(70),
            allowNull: false
        }
    },
        { timestamps: false });
    return Teams
}