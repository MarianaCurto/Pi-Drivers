import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import style from './Detail.module.css';


const Detail = () => {

    const {id} = useParams();

    const [driver, setDriver] = useState([]);
    
    useEffect(() => {
        axios(`http://localhost:3001/drivers/${id}`)
        .then(({ data }) => {
              if (data.name) {
                 setDriver(data);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           }
        );
        return setDriver({});
     }, [id]);


    return(
        <div>
             <div>
         {driver.name && <h2>NAME | {driver.name}</h2>}
         {driver.dob && <p>STATUS | {driver.dob}</p>}
         {driver.nationality && <p>SPECIES | {driver.nationality}</p>}
         {driver.teams && <p>GENDER | {driver.teams}</p>}
         {driver.description && <p>ORIGIN | {driver.description}</p>}
         </div>
       
         {driver.image && <img src={driver.image} alt={driver.name} />}

        </div>
    )
};


export default Detail;