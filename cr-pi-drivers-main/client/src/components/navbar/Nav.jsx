import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import SearchBar from "../searchbar/SearchBar";
import Order from "../orderfilter/Order";
import style from './Nav.module.css'


const Nav = () => {

const dispatch = useDispatch();

const location = useLocation();

// const handleOrderChange = (order) => {
//         setCurrentOrder(order);
//         dispatch(orderDrivers(order));
//       };

      const handleOrderChange = (order) => {
        setCurrentOrder(order);
        if (order === 'Asc' || order === 'Desc') {
          dispatch(orderDriversDob(order)); // Usar el nuevo tipo de ordenamiento
        } else {
          dispatch(orderDrivers(order));
        }
      };
    
    return(
        <div className={style.navbar} style={{ position: location.pathname === '/detail/:id' ? 'relative' : 'fixed' }}>

            <Link to = '/home'>
            <button>HOME</button>
            </Link>

            <Link to = '/form'>
            <button>NEW DRIVER</button>
            </Link>

            <SearchBar />

            <Order handleOrderChange = {handleOrderChange}/>

           


        </div>
    )
};

export default Nav;