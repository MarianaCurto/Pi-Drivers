import style from './Card.module.css'
import { Link } from "react-router-dom";

const Card = ({id, name, surname, image}) => {
    return(
        <div className={style.container}>

<Link to={`/drivers/${id}`}>
        <h2 className={style.name}>{name} {surname}</h2>
      
      </Link>
          
   
      <Link to={`/drivers/${id}`}>
        <img className={style.cardimage} src={image} alt="" />
      </Link>

    

        </div>
    )
};


export default Card;