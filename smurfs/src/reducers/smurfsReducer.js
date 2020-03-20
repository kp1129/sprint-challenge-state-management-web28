import {FETCHING_DATA, UPDATE_DATA, ERROR_HAPPENED} from '../actions/smurfsActions';



// initial state
const initialState = {
    message: "Have fun!",
    smurfs: []
}

// reducer function
export const smurfsReducer = (state = initialState, action) => {
    switch(action.type){
        case UPDATE_DATA: 
            return {
                ...state,
                smurfs: action.payload,
                message: "Add more Smurfs!"
            }
        case FETCHING_DATA:
            return {
                ...state,
                message: "Loading..."
            }
        case ERROR_HAPPENED:
            return {
                ...state,
                message: "Oops, something went wrong"
            }    

        default:
            return state;
    }
}