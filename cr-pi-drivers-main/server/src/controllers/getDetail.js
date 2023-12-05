const { Driver, Teams } = require("../db");
const axios = require("axios");
// const { isUUID } = require('uuid');

const isUUID = (str) =>
  /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(
    str
  );
const getDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const isUUIDFormat = isUUID(id);

    if (isNaN(id)) {
      // Consultar en la base de datos
      const find = await Driver.findAll({
        where: { id },
        include: Teams,
      });

      if (!find) {
        return res.status(404).json({ message: "Driver not found" });
      }

      return res.status(200).json(find[0]);
    } else {
      // Si no es un UUID, asumimos que es un ID de la API externa

      const { data } = await axios.get(`http://localhost:5000/drivers/${id}`);

      return res.status(200).json(data);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getDetail,
};
