import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Nav from "../../components/navbar/Nav";
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
        <div className={style.cont}>

         <Nav />
         
             <div>
         {driver.name && <h2>NAME | {`${driver?.name?.forename} ${driver?.name?.surname}`}</h2>}
         {driver.dob && <p>DOB | {driver.dob}</p>}
         {driver.nationality && <p>NATIONALITY | {driver.nationality}</p>}
         {driver.teams && <p>TEAMS | {driver.teams}</p>}
         {driver.description && <p>DESCRIPTION | {driver.description}</p>}
         </div>
       
         {driver.image && <img src={driver?.image?.url} alt={driver.name} />}

        </div>
    )
};


export default Detail;