import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDrivers, getAllTeams, goback } from "../../redux/actions";
import style from "./Home.module.css";
import Card from "../../components/card/Card";
import Pages from "../../components/pagees/Pages";

const Home = () => {
  const [driversPerPage, setDriversPerPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentOrder, setCurrentOrder] = useState("A");

  const lastIndex = currentPage * driversPerPage;
  const firstIndex = lastIndex - driversPerPage;

  const dispatch = useDispatch();
  const allDrivers = useSelector((state) => state.allDrivers);
  const allTeams = useSelector((state) => state.allTeams);

  useEffect(() => {
    if (!allDrivers.length) dispatch(getAllDrivers());
    if (!allTeams.length) dispatch(getAllTeams());
  }, []);

  const totalDrivers = allDrivers.length;


  const handleBack = () => {
    dispatch(goback());
  };


  return (
    <div className={style.container}>
      <button onClick={handleBack} className={style.button}>
        ALL DRIVERS
      </button>


      {allDrivers
        .slice(firstIndex, lastIndex)
        .map(({ id, forename, surname, image, teams }) => (
          <Card
            key={id}
            id={id}
            name={forename}
            surname={surname}
            image={image}
            teams={teams}
            className={style.card}
          />
        ))}

      <Pages
        driversPerPage={driversPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalDrivers={totalDrivers}
      />
    </div>
  );
};
export default Home;
