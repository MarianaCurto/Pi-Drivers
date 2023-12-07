const axios = require("axios");
const { Driver, Teams } = require("../db");
const { Op, Sequelize } = require("sequelize");

const getDriver = async (req, res) => {
  const { name } = req.query;

  if (name) {
    try {
      const driverDB = await Driver.findAll({
        where: {
          [Sequelize.Op.or]: [
            { forename: { [Sequelize.Op.iLike]: `%${name}%` } },
            { surname: { [Sequelize.Op.iLike]: `%${name}%` } },
          ],
        },
        include: [
          {
            model: Teams,
            as: "Teams",
            attributes: ["name"],
            through: { attributes: [] },
          },
        ]
      });

      const driverArray = Object.values(driverDB).map((driver) => ({
        id: driver.id,
        forename: driver?.forename,
        surname: driver?.surname,
        description: driver.description,
        image: driver.image,
        nationality: driver.nationality,
        teams: driver.Teams.map((team)=>team.name).join(", "),
        dob: driver.dob,
      }));;

      const { data } = await axios(`http://localhost:5000/drivers`);

      const nameStr = name.toLowerCase();

      const filteredDrivers = data
  .filter((driver) =>
    driver.name?.forename.toLowerCase().includes(nameStr)
  )
  .map((driver) => ({
    id: driver.id,
    forename: driver?.name?.forename,
    surname: driver?.name?.surname,
    description: driver.description,
    image:
      driver.image?.url ||
      "https://hips.hearstapps.com/autoweek/assets/s3fs-public/DPkZATWXUAAnsCz.jpg",
    nationality: driver.nationality,
    teams: driver.teams,
    dob: driver.dob,
    created: false,
  }));

      if (!filteredDrivers.length && !driverArray.length)
        throw new Error("No driver found");

      driverFiltrados = [...filteredDrivers, ...driverArray];
      driverLimit = driverFiltrados.slice(0, 14);

      return res.status(200).json(driverLimit);
    } catch (error) {
      res.status(500).send(error.message);
    }
  } else {
    try {
      const dbDrivers = await Driver.findAll({
        include: [
          {
            model: Teams,
            as: "Teams",
            attributes: ["name"],
            through: { attributes: [] },
          },
        ],
      });

      const driversMap = dbDrivers.map((driver) => {
        return {
          id: driver.id,
          forename: driver.forename,
          surname: driver.surname,
          description: driver.description,
          image: driver.image,
          nationality: driver.nationality,
          dob: driver.dob,
          teams: driver.Teams.map((team)=>team.name).join(", "),
          created: true,
          
        }
      })

      const result = (await axios.get("http://localhost:5000/drivers")).data;

      const driversDefaultImage = result.map((driver) => {
        return {
          id: driver.id,
          forename: driver?.name?.forename,
          surname: driver?.name?.surname,
          description: driver.description,
          image:
            driver?.image?.url ||
            "https://hips.hearstapps.com/autoweek/assets/s3fs-public/DPkZATWXUAAnsCz.jpg",
          nationality: driver.nationality,
          dob: driver.dob,
          teams: driver.teams,
          created: false,
        };
      });
      const total = [...driversMap, ...driversDefaultImage];
      return res.status(200).json(total);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
};

module.exports = {
  getDriver,
};
