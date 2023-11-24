const axios = require('axios');

const getDriver = async (req, res) => {
    try {
        const result = (await axios.get('http://localhost:5000/drivers')).data;
        // console.log(data)

        const driversDefaultImage = result.map(driver => {
            return {
                id: driver.id,
                forename: driver?.name?.forename,
                surname: driver?.name?.surname,
                description: driver.description,
                image: driver.image.url || 'https://hips.hearstapps.com/autoweek/assets/s3fs-public/DPkZATWXUAAnsCz.jpg',
                nationality: driver.nationality,
                dob: driver.dob
            };
        });

        return res.status(200).json(driversDefaultImage)
          
    } catch (error) {
       return res.status(500).send(error.message);
    }

};


module.exports = {
    getDriver
}