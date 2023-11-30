import style from './Card.module.css'
import { Link } from "react-router-dom";

const Card = ({id, name, surname, image}) => {
    return(
        <div className={style.container}>

<Link to={`/detail/${id}`}>
        <h2 className={style.name}>{name} {surname}</h2>
      
      </Link>
          
   
      <Link to={`/detail/${id}`}>
        <img className={style.cardimage} src={image} alt="" />
      </Link>

    

        </div>
    )
};


export default Card;