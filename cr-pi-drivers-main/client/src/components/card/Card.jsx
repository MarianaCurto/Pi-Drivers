import { Link } from "react-router-dom";

const Card = ({id, name, image, dob, nationality, teams, description}) => {
    return(
        <div>
             {/* <Link to={`/detail/${props.id}`}>
                <h2>Name : {props.name.forename}</h2>
                <h2>Last Name : {props.name.surname}</h2>
                <h2>Image : {props.image.url}</h2>
                <h2>Description : {props.description}</h2>
                <h2>Nationality : {props.nationality}</h2>
                <h2>Birthday : {props.dob}</h2>
                <h2>Teams : {props.teams}</h2>
            </Link> */}

            
      <Link to={`/detail/${id}`}>
        <img className="card-image" src={image} alt="" />
      </Link>

      <Link to={`/detail/${id}`}>
        <h2 className={style.name}>{name}</h2>
      </Link>

        </div>
    )
};


export default Card;