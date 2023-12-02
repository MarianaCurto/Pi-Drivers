import { useEffect, useState } from "react";
import style from './Form.module.css'

const Form = () => {

    const [driverData, setDriverData] = useState({
        forename: "",
        surname: "",
        nationality: "",
        dob: "",
        description: "",
        teams: ""
      });

      const [errors, setErrors] = useState({});

      const handleChange = (event) => {
        setDriverData({
          ...driverData,
          [event.target.name]: event.target.value,
        });
      };
    
      useEffect(() => {
        if (driverData.forename !== "" || driverData.surname !== "" || driverData.nationality !== "") {
          setErrors(validation(driverData));
        }
      }, [driverData]);

    return (
        <div className={style.container}>

            <form action="" className={style.formContainer}>
            <div class="formRow">
                <label htmlFor="forename">FORENAME</label>
                <input type="forename"
                       value={driverData.forename}
                       name="forename"
                       onChange={handleChange} 
                
                />
                

                <label htmlFor="surname">SURNAME</label>
                <input type="surname"
                       value={driverData.surname}
                       name="surname"
                       onChange={handleChange} 
                 
                />
            </div>

            <br />

            <div class="formRow">
                <label htmlFor="nationality">NATIONALITY</label>
                <input type="nationality"
                       value={driverData.nationality}
                       name="nationality"
                       onChange={handleChange}
                
                />

                <label htmlFor="dob">DOB</label>
                <input type="dob" 
                       value={driverData.dob}
                       name="dob"
                       onChange={handleChange}
                
                />
            </div>

            <br />

                <label htmlFor="teams">TEAMS</label>
                <input type="teams"
                       value={driverData.teams}
                       name="teams"
                       onChange={handleChange} 
                
                />

                <br />
                <br />

                <label htmlFor="description">DESCRIPTION</label>
                <textarea type="textarea" 
                       value={driverData.description}
                       name="description"
                       onChange={handleChange}
                
                />

                <button>SAVE</button>

            </form>

        </div>
    )
};

export default Form;