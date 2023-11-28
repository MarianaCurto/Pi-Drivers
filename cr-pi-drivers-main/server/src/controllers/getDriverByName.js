const { Driver, Teams } = require('../db');
const { Op } = require('sequelize');
const axios = require('axios');


const getDriversByName = async (req, res) => {
    
    try {
        const { name } = req.query;

        let driver;
  if (name) {
    const driverDB = await Driver.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
      Include: Teams,
    });
    const driverApi = await axios(`http://localhost:5000/drivers/name?=${name}`)
      .data;
      
    driver = [...driverDB, ...driverApi];
    driver = driver.slice(0, 16);
    return driver;
  }

    } catch (error) {
      res.status(500).send(error.message);
    }
  };


module.exports = {
    getDriversByName
};