import { GET_ALL_DRIVERS, 
         ORDER_DRIVERS, 
         RESET_ORDER, 
         ORDER_DRIVERS_DOB, 
         GET_ALL_TEAMS, 
         FILTER_TEAMS, 
         FILTER_DRIVERS, 
         GET_DRIVER_BY_NAME, 
         GO_BACK } from "./action-types";

const initialState = {
    allDrivers: [],
    filteredDrivers: [],
    allTeams : [],
    filteredTeams: [],
    currentPage: 1
};


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ALL_DRIVERS:
            return {
                ...state,
                allDrivers: action.payload,
                filteredDrivers: action.payload

            }

        case GET_ALL_TEAMS:
                return {
                    ...state,
                    allTeams: action.payload,
    
                }

        case GET_DRIVER_BY_NAME:
            return {
                ...state,
                allDrivers: action.payload
            }

        case ORDER_DRIVERS:
            switch(action.payload){
                case 'All drivers':
                    return{
                        ...state,
                        allDrivers: state.filteredDrivers
                    };
                case 'A':
                    return{
                        ...state,
                        allDrivers: [...state.allDrivers].sort((a, b) => a.surname.localeCompare(b.surname))
                    };
                case 'D':
                    return{
                        ...state,
                        allDrivers: [...state.allDrivers].sort((a, b) => b.surname.localeCompare(a.surname))
                    }; 

            }

        case ORDER_DRIVERS_DOB :
         
            const filterAgeOlder = [...state.allDrivers].sort((a, b) => new Date(a.dob) - new Date(b.dob))
            if(action.payload === 'Asc') {
                return{
                    ...state,
                    allDrivers: filterAgeOlder
                }
            }
            const filterAgeYounger = [...state.allDrivers].sort((a, b) => new Date(b.dob) - new Date(a.dob))
            if(action.payload === 'desc'){
               return{
                ...state,
                allDrivers: filterAgeYounger
               }
            }
             
        case FILTER_DRIVERS:
            switch(action.payload){
                case 'All drivers':
                    return{
                        ...state,
                        allDrivers: state.filteredDrivers
                    };
                case 'DB':
                    return{
                        ...state,
                        allDrivers: state.filteredDrivers.filter((driver) => driver.created)
                    };
                case 'API':
                    return{
                        ...state,
                        allDrivers: state.filteredDrivers.filter((driver) => !driver.created)
                    }
            }
        
        case FILTER_TEAMS :
            // if(action.payload === 'All teams'){
            //     return{
            //         ...state,
            //         allTeams: state.filteredTeams
            //     }
            // }
            // const teamsFilter = state.allTeams.filter((driver) => driver.teams === action.payload)
            // if(teamsFilter.length){
            //     return {
            //         ...state,
            //         allTeams: teamsFilter
            //     }
            // }
            return {
                ...state,
                filteredDrivers: state.allDrivers.filter((t) => {
                  if (t.team) {
                    return t.team.includes(action.payload);
                  }
                }),
              };

        case RESET_ORDER:
                return {
                  ...state,
                  allDrivers: [...state.filteredDrivers],
                  currentPage: 1
                }
        case GO_BACK:
            return {
                ...state,
                allDrivers: [...state.filteredDrivers],
                currentPage: 1
            }
        default: 
        
            return {
                ...state
            }
    }

};

export default reducer;