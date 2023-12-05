require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const DriverModel = require("./models/Driver");
const TeamModel = require("./models/Teams");

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/drivers`,
  {
    logging: false,
    native: false,
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("DB conectada correctamente");
  })
  .catch((error) => {
    console.log("Tenemos un problema", error);
  });


DriverModel(sequelize);
TeamModel(sequelize);

const { Driver, Teams } = sequelize.models;
Driver.belongsToMany(Teams, { through: "DriverTeams" });
Teams.belongsToMany(Driver, { through: "DriverTeams" });

module.exports = {
  Driver,
  Teams,
  conn: sequelize
};
