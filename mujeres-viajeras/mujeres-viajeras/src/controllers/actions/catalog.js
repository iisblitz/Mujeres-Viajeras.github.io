import axios from axios;


export function getCatalog(){
    return async function (dispatch){
        var json = await axios.get("http://localhost:5000/catalog",{

        });
        return dispatch ({
        type: 'GET_CATALOG',
        payload: json.data
        })
    }
}

export function getTravel(){
    return async function (dispatch){
        try{
            var json = await axios.get(`http://localhost:5000/catalog/${id}`)
            return dispatch({
                type: GET_TRAVEL,
                payload: json.data
            })
        }catch(error){
            console.log(error)
        }}}

export function addTravel(){
    return async function (dispatch){
        try{
            var info = await axios.post(`http://localhost:5000/catalog/${id}`)
            return dispatch ({
            type: ADD_TRAVEL,
            payload: info.data
        })
    }catch(error){
        console.log(error)
    }
    }}

export function deleteTravel(){
    return async function (dispatch){
        try{
        var info = await axios.delete(`http://localhost:5000/catalog/${id}`)
        return dispatch({
        type: DELETE_TRAVEL,
        payload: info.data
        })
    }catch(error){
        console.log(error)
    }
}}

export function updateTravel(){
    return async function (dispatch){
        try{
            var info = await axios.update(`http://localhost:5000/catalog/${id}`)
            return dispatch({
                type: UPDATE_TRAVEL,
                payload: info.data
        })       
            }catch(error){
                console.log(error)
            }
        }
    }
