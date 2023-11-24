const { Teams } = require('../db');

const getAllTeams = async (req, res) => {
    try {
 // Obtener drivers de la API
 const apiResponse = await axios.get('http://localhost:5000/drivers');
 const apiDrivers = apiResponse.data;

 // Obtener equipos de los drivers en la API
 const apiTeams = apiDrivers.map(driver => driver.teams);

 // Verificar si ya hay equipos en la base de datos
 const dbTeams = await Teams.findAll();

 // Si no hay equipos en la base de datos, guardar los obtenidos de la API
 if (dbTeams.length === 0) {
     await Teams.bulkCreate(apiTeams.flat()); // Utiliza flat para aplanar el array de arrays
 }

 // Obtener equipos de la base de datos (independientemente de si ya había o no)
 const allTeams = await Teams.findAll();

 return res.status(200).json(allTeams);
        
    } catch (error) {
    return res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllTeams
}