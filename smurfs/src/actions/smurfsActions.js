import axios from 'axios';
// action.type as strings
export const FETCHING_DATA = "FETCHING_DATA";
export const UPDATE_DATA = "UPDATE_DATA";
export const ERROR_HAPPENED = "ERROR_HAPPENED"

//action creators
export const fetchingData = () => dispatch => {
    dispatch({ type: FETCHING_DATA });
    axios.get("http://localhost:3333/smurfs")
    .then(res =>{
        dispatch({ type: UPDATE_DATA, payload: res.data })
    })
    .catch(err => {
        dispatch({ type: ERROR_HAPPENED })
    })
}

export const updateData = (data) => dispatch => {
    dispatch({ type: UPDATE_DATA, payload: data });
}

export const postData = (smurf) => dispatch => {
    axios.post("http://localhost:3333/smurfs", smurf)
    .then(res => {        
        dispatch({ type: UPDATE_DATA, payload: res.data})
    })
    .catch(err => {
        dispatch({ type: ERROR_HAPPENED})
    })
}