import { Link } from "react-router-dom";
import SearchBar from "../searchbar/SearchBar";
import style from './Nav.module.css'


const Nav = () => {
    return(
        <div className={style.navbar}>

            <Link to = '/home'>
            <button>HOME</button>
            </Link>

            <Link to = ''>
            <button>NEW DRIVER</button>
            </Link>

            <SearchBar />

            <button>ALL DRIVERS</button>

            <button>RESET</button>

        </div>
    )
};

export default Nav;