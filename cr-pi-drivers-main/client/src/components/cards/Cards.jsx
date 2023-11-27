import Card from "../card/Card";

const Cards = ({drivers}) => {
    return(
        <div>
            {drivers.map(
        ({ id, name, image, dob, nationality, teams, description }) => {
          return (
            <Card
              id={id}
              key={id}
              name={name}
              dob={dob}
              nationality={nationality}
              temas={teams}
              description={description}
              image={image}
            //   onClose={onClose}
            />
          );
        }
      )}

        </div>
    )
};


export default Cards;