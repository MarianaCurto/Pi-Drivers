import {
  GET_ALL_DRIVERS,
  FILTER_TEAMS,
  ORDER_DRIVERS,
  ORDER_DRIVERS_DOB,
  GET_ALL_TEAMS,
  FILTER_DRIVERS,
  GET_DRIVER_BY_NAME,
  GO_BACK,
} from "./action-types";
import axios from "axios";

export const getAllDrivers = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios("http://localhost:3001/drivers");
      return dispatch({
        type: GET_ALL_DRIVERS,
        payload: data,
      });
    } catch (error) {
      throw Error(error.message);
    }
  };
};

export const getAllTeams = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios("http://localhost:3001/teams");
      return dispatch({
        type: GET_ALL_TEAMS,
        payload: data,
      });
    } catch (error) {
      throw Error(error.message);
    }
  };
};

export const getDriverByName = (name) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `http://localhost:3001/drivers?name=${name}`
      );
      return dispatch({ type: GET_DRIVER_BY_NAME, payload: data });
    } catch (error) {
      throw Error(error.message);
    }
  };
};

export const postDriver = (driverData) => {
  return async (dispatch) => {
    try {
      await axios.post("http://localhost:3001/drivers", driverData);
      console.log("creado");
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const orderDrivers = (orden) => {
  return { type: ORDER_DRIVERS, payload: orden };
};

export const orderDriversDob = (dob) => {
  return { type: ORDER_DRIVERS_DOB, payload: dob };
};

export const filterTeams = (selectedTeam) => {

  return async (dispatch) => {
    try {
      console.log(selectedTeam);
      const { data } = await axios.get('http://localhost:3001/drivers');

      return dispatch({
        type: FILTER_TEAMS,
        payload: { drivers: data, selectedTeam: selectedTeam }
      });
    } catch (error) {
      throw Error(error.message)
    }}

};

export const filterDrivers = (driver) => {
  return { type: FILTER_DRIVERS, payload: driver };
};



export const goback = () => {
  return { type: GO_BACK };
};
