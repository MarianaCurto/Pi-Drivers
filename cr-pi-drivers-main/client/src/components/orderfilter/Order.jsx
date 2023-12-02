import { useDispatch, useSelector } from "react-redux";
import { orderDrivers, resetOrder, orderDriversDob, filterTeams, filterDrivers } from "../../redux/actions";
import style from './Order.module.css';


const Order = () => {

    const allTeams = useSelector((state) => state.allTeams)
    const dispatch = useDispatch();
    const handleOrder = (e) => {
        const orderType = e.target.value;
        dispatch(orderType === 'Asc' || orderType === 'Desc' ? orderDriversDob(orderType) : orderDrivers(orderType));
      };
    
    const handleFilter = (e) => {
        dispatch(filterTeams(e.target.value))
    }

    const handleFilterDrivers = (e) => {
      dispatch(filterDrivers(e.target.value))
    }

    const handleResetOrder = () => {
        dispatch(resetOrder());
      };

    return (
        <div className= {style.filtercontainer}>
             <select onChange={handleOrder} className={style.orderselect} >
             <option value='All drivers'>DRIVERS</option>
            <option value = 'A'>A-Z</option>
            <option value = 'D'>Z-A</option>
            <option value = 'Asc'>OLDER</option>
            <option value = 'desc'>YOUNGER</option>
          </select>
     

          <select onChange = {handleFilter} className= {style.teamselect}>
            <option value='All teams'>ALL TEAMS</option>
            {allTeams.length && allTeams.map(({id, name}) => {
                return (
                    <option key = {id} value={name}>{name}</option>
                )
            })}
          </select>

          <select onChange={handleFilterDrivers} className={style.driverselect}>
          <option value='All drivers'>ALL DRIVERS</option>
            <option value='DB'>DRIVERS CREATED</option>
            <option value='API'>API DRIVERS</option>
          </select>

          <button onClick={handleResetOrder}>RESET</button>
        </div>
    )
};

export default Order;