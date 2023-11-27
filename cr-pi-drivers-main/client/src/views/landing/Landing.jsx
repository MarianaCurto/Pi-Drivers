import { useEffect } from "react";
import style from "./Landing.module.css";
import { Link } from "react-router-dom";


const Landing = () => {

    useEffect(() => {
        document.body.style.backgroundImage = `url('/src/assets/pictures/landing.jpg')`;
        document.body.style.backgroundSize = "cover" ;
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundAttachment = "fixed"; 

        
       
    
        return () => {
          document.body.style.backgroundImage = null;
          document.body.style.backgroundSize = null;
          document.body.style.backgroundRepeat = null;
          document.body.style.backgroundAttachment = null;
   
          
        }
      }, [])

    return(
        <div className={style.container}>
            <h1>DRIVE TO SURVIVE</h1>
            <Link to = '/home'>
            <button>START</button>
            </Link>
     

        </div>
    )
};


export default Landing;