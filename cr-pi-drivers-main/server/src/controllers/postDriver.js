const { Driver, Teams } = require('../db');

// const postDriver = async (req, res) => {
//     try {
//         const { name, lastName, description, image, nationality, dob, teams } = req.body;

//         if (!name || !lastName || !description || !image || !nationality || !dob || !teams || teams.length === 0 ) {
//             return res.status(400).json({ message: 'Missing info' });
//         } else {
//             const [createdDriver, created] = await Driver.findOrCreate({
//                 where: {
//                     name: name.forename,
//                     lastName: name.surname,
//                     description: description,
//                     image: image,
//                     nationality: nationality,
//                     dob: dob
//                 }
//             });

//             await createdDriver.setTeams(teams);
//         }

//         const postNewDriver = await Driver.findAll();
//         return res.status(200).json(postNewDriver);
//     } catch (error) {
//         console.error(error);
//         return res.status(500).send(error.message);
//     }
// };

// module.exports = {
//     postDriver
// };

const postDriver = async (req, res) => {
    try {
        const { name, description, image, nationality, dob, teams } = req.body;

        if (!name || !description || !image || !nationality || !dob || !teams) {
            return res.status(400).json({ message: 'Missing info' });
        } else {
            const [createdDriver, created] = await Driver.findOrCreate({
                where: {
                    name: name,
                    description: description,
                    image: image,
                    nationality: nationality,
                    dob: dob
                }
            });

            // Busca los equipos en la base de datos
            const teamsInDatabase = await Teams.findAll({
                where: {
                    name: teams
                }
            });

            // Asocia los equipos al conductor creado
            await createdDriver.addTeams(teamsInDatabase);
        }

        const postNewDriver = await Driver.findAll();
        return res.status(200).json(postNewDriver);
    } catch (error) {
        console.error(error);
        return res.status(500).send(error.message);
    }
};

module.exports = {
    postDriver
};