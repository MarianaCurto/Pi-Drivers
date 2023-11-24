const { Driver } = require('../db');
const { Op } = require('sequelize')

// const getDriverbyName = async (req, res) => {
//     try {

//     const { name } = req.query;

//     const driverName = await Driver.findAll({
//         where: {
//             [Op.or]: [
//                 { 'name.forename': { [Op.iLike]: `%${name}%` } },
//                 { 'name.surname': { [Op.iLike]: `%${name}%` } }
//                  ]
//         },
//         limit: 15
//     });

//     if(!driverName){
//         return res.status(404).json({ message: 'No drivers found with that name' })
//     } else {

//         const result = (await axios.get(`http://localhost:5000/drivers?name.forename=${name}`)).data;
//         // console.log(data)

//         const driverName = result.filter(driver => {
//             return {
//                 id: driver.id,
//                 forename: driver?.name?.forename,
//                 surname: driver?.name?.surname,
//                 description: driver.description,
//                 image: driver.image.url || 'https://hips.hearstapps.com/autoweek/assets/s3fs-public/DPkZATWXUAAnsCz.jpg',
//                 nationality: driver.nationality,
//                 dob: driver.dob
//             };
//         });

//         return res.status(200).json(driverName)
       
//     }
        
//     } catch (error) {
//         return res.status(500).json({ message: error.message })
//     }
// };


// module.exports = {
//     getDriverbyName
// }

const getDriversByName = async (req, res) => {
    try {
        const { name } = req.query;
        

        // Buscar en la base de datos
        const dbDrivers = await Driver.findAll({
            where: {
                [Op.or]: [
                    { 'name.forename': { [Op.iLike]: `%${name}%` } },
                    { 'name.surname': { [Op.iLike]: `%${name}%` } }
                ]
            },
            limit: 15
        });

        // Buscar en la API
        const apiResponse = await axios.get(`http://localhost:5000/drivers?name.forename=${name.toLowerCase()}`);
        const apiDrivers = apiResponse.data;

        const allDrivers = [...dbDrivers, ...apiDrivers];

        if (allDrivers.length === 0) {
            return res.status(404).json({ message: 'No drivers found with that name' });
        } else {
            return res.status(200).json(allDriversDrivers.slice(0, 15));
            };

            
        
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}


module.exports = {
    getDriversByName
};