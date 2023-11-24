require('dotenv').config();
const { Sequelize } = require('sequelize');

// const fs = require('fs');
// const path = require('path');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const DriverModel = require('./models/Driver');
const TeamModel = require('./models/Teams');

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/drivers`, {
  logging: false, 
  native: false, 
});

sequelize.authenticate()
.then(() => {
   console.log('DB conectada correctamente')
})
.catch((error) => {
   console.log('Tenemos un problema', error)
})
// const basename = path.basename(__filename);

// const modelDefiners = [];

// fs.readdirSync(path.join(__dirname, '/models'))
//   .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
//   .forEach((file) => {
//     modelDefiners.push(require(path.join(__dirname, '/models', file)));
//   });


// modelDefiners.forEach(model => model(sequelize));

// let entries = Object.entries(sequelize.models);
// let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
// sequelize.models = Object.fromEntries(capsEntries);

DriverModel(sequelize);
TeamModel(sequelize);
// Aca vendrian las relaciones
// Product.hasMany(Reviews);

const { Driver, Teams} = sequelize.models;
Driver.belongsToMany(Teams,{through: 'DriverTeams'})
Teams.belongsToMany(Driver,{through:'DriverTeams'})


module.exports = {
  
  Driver,
  Teams,
  // ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
  
};