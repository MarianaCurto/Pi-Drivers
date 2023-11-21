const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Driver', {
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      // primaryKey: true
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING(100),
      allowNull: false,
      isUrl: true
    },
    nationality: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    dob: {
      type: DataTypes.DATE,
      allowNull: false
    }
  });
};