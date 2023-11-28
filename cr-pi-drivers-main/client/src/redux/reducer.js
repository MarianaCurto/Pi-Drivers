import { GET_ALL_DRIVERS } from "./action-types";

const initialState = {
    allDrivers: [],
    teams : []
};


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ALL_DRIVERS:
            return {
                ...state,
                allDrivers: action.payload

            }
            default: return {...state}
    }

};

export default reducer;