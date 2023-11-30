// const { Driver, Teams } = require('../db');
// const { Op, Sequelize } = require('sequelize');
// const axios = require('axios');


// const getDriversByName = async (req, res) => {
    
  //   try {
  //       // const { name } = req.query;

       
  
  //   const driverDB = await Driver.findAll({
  //     where: 
  //    { [Sequelize.Op.or]: [
  //       { 'name.forename': { [Sequelize.Op.iLike]: `%${name}%` } },
  //       { 'name.surname': { [Sequelize.Op.iLike]: `%${name}%` } },
  //     ]}
        
  //     })

  //   const driverArray = Object.values(driverDB).map(value => ({value}));

  //   const { data } = await axios(`http://localhost:5000/drivers`);

  //   const nameStr = name.toLowerCase()

  //   const filteredDrivers = data.filter((driver)=>{
  //     const forename = driver.name.forename.toLowerCase()
  //     return forename == nameStr
  //   });

  //   if(!filteredDrivers.length && !driverArray.length) throw new Error ('No driver found')
      
  //   driverFiltrados = [...filteredDrivers, ...driverArray];
  //   driverLimit = driverFiltrados.slice(0, 14);
    
  //  return res.status(200).json(driverLimit)

//     } catch (error) {
//       res.status(500).send(error.message);
//     }
//   };


// module.exports = {
//     getDriversByName
// };