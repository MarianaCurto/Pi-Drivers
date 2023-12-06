const { Driver, Teams } = require("../db");

const postDriver = async (req, res) => {
  try {
    const { forename, surname, description, image, nationality, dob, teams } =
      req.body;

    if (
      !forename ||
      !surname ||
      !description ||
      !image ||
      !nationality ||
      !dob ||
      !teams
    ) {
      return res.status(400).json({ message: "Missing info" });
    } else {
      const [createdDriver, created] = await Driver.findOrCreate({
        where: {
          forename,
          surname,
          description: description,
          image: image,
          nationality: nationality,
          dob: dob,
        },
      });
      const clean = [];
      const separate = teams.split(",");
      separate.map((x) => {
        clean.push(x.trim());
      });

      console.log(separate);
      console.log(clean);

      const allTeams = await Teams.findAll();
      // console.log(allTeams);
      const foundTeams = [];
      allTeams.map((team) => {
        clean.map((x) => {
          x == team.name ? foundTeams.push(team.name) : false;
        });
      });

      console.log(foundTeams);

      // foundTeams.map(async(team) => {
      //   await createdDriver.addTeams(team.name);
      // });
      for (const team of foundTeams) {
        await createdDriver.addTeams(team.name);
      }


      console.log(foundTeams);
      console.log(createdDriver)

     

      return res.status(200).json(createdDriver);
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send(error.message);
  }
};

module.exports = {
  postDriver,
};
