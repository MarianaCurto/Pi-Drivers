import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getAllDrivers } from '../../redux/actions';
import style from './Home.module.css'
// import Nav from "../../components/navbar/Nav";
import Card from '../../components/card/Card';
import Pages from '../../components/pagees/Pages'

const Home = () => {

const [driversPerPage, setDriversPerPage] = useState(9);
const [currentPage, setCurrentPage] = useState(1);


const lastIndex = currentPage * driversPerPage;
const firstIndex = lastIndex - driversPerPage;

const dispatch = useDispatch();
const allDrivers = useSelector((state) => state.allDrivers)

useEffect(() => {
    dispatch(getAllDrivers())
}, [])

const totalDrivers = allDrivers.length;

// console.log(allDrivers)
    return (
        <div className={style.container}>
            
           
           

{allDrivers.slice(firstIndex, lastIndex).map(({ id, forename, surname, image }) => (
        <Card
          key={id}
          id={id}
          name={forename}
          surname={surname}
          image={image}
          className={style.card}
        />
      ))}

            <Pages driversPerPage = {driversPerPage} currentPage = {currentPage} setCurrentPage = {setCurrentPage} totalDrivers = {totalDrivers} />

        </div>
    )
};

export default Home;