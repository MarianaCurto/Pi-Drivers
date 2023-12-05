import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import style from "./Detail.module.css";

const Detail = () => {
  const { id } = useParams();
  const stringId = String(id);

  const [driver, setDriver] = useState({});

  // useEffect(() => {
  //   axios(`http://localhost:3001/drivers/${id}`)
  //   .then(({ data }) => {
  //     console.log(data);
  //     if (data.name) {
  //       setDriver(data);
  //     } else {
  //       window.alert("No hay personajes con ese ID");
  //     }
  //   });
  //   //return setDriver({});
  // }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching data for driver with ID:", stringId);

        const response = await axios(`http://localhost:3001/drivers/${stringId}`);
        const { data } = response;

        console.log("Data received from server:", data);

        if (data.name) {
          setDriver(data);
          console.log("Driver after setDriver:", driver);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      } catch (error) {
        console.error("Error al obtener datos del servidor:", error);
      }
    };

    fetchData();
  }, [stringId]);


  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       console.log("Fetching data for driver with ID:", id);

  //       const response = await axios(`http://localhost:3001/drivers/${(id)}`);
  //       const { data } = response;

  //       console.log("Data received from server:", data);

  //       if (data.name) {
  //         setDriver(data);
  //         console.log("Driver after setDriver:", driver);
  //       } else {
  //         window.alert("No hay personajes con ese ID");
  //       }
  //     } catch (error) {
  //       console.error("Error al obtener datos del servidor:", error);
  //     }
  //   };

  //   fetchData();
  // }, [id]);

  console.log("Render with driver data:", driver);

  return (
    <div className={style.cont}>
      <div>
        {driver.name && (
          <h2>NAME | {`${driver?.name?.forename} ${driver?.name?.surname}`}</h2>
        )}
        {driver.dob && <p>DOB | {driver.dob}</p>}
        {driver.nationality && <p>NATIONALITY | {driver.nationality}</p>}
        {driver.teams && <p>TEAMS | {driver.teams}</p>}
        {driver.description && <p>DESCRIPTION | {driver.description}</p>}
      </div>

      {driver.image && <img src={driver?.image?.url} alt={driver.name} />}
    </div>
  );
};

export default Detail;
