const { DataTypes, UUIDV4 } = require('sequelize');

module.exports = (sequelize) => {
  
  const Driver = sequelize.define('Driver', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: 

      {
        type: DataTypes.JSON, // Especifica que 'name' es de tipo JSON
        allowNull: false,
      },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING(100),
      allowNull: false,
      isUrl: true,
      // defaultValue: 'https://hips.hearstapps.com/autoweek/assets/s3fs-public/DPkZATWXUAAnsCz.jpg'
    },
    nationality: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    dob: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  },
  { timestamps: false });
  return Driver
};