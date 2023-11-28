import { GET_ALL_DRIVERS } from "./action-types";
import axios from 'axios';

export const getAllDrivers = () => {
    return async(dispatch) => {

        try {
         const { data } = await axios('http://localhost:3001/drivers')
         return dispatch({
             type: GET_ALL_DRIVERS,
             payload: data,
         });
        } catch (error) {
         throw Error(error.message)
        }
     }
}