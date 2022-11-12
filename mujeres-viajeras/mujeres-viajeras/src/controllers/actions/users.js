export function getUsers(){
    return async function (dispatch){
        var json = await axios.get("http://localhost:5000/users",{

        });
        return dispatch ({
        type: 'GET_USERS',
        payload: json.data
        })
    }
}

export function getUser(){
    return async function (dispatch){
        try{
            var json = await axios.get(`http://localhost:5000/users/${id}`)
            return dispatch({
                type: GET_USER,
                payload: json.data
            })
        }catch(error){
            console.log(error)
        }}}

export function addUser(){
    return async function (dispatch){
        try{
            var info = await axios.post(`http://localhost:5000/users/${id}`)
            return dispatch ({
            type: ADD_USERS,
            payload: info.data
        })
    }catch(error){
        console.log(error)
    }
    }}

export function deleteUser(){
    return async function (dispatch){
        try{
        var info = await axios.delete(`http://localhost:5000/users/${id}`)
        return dispatch({
        type: DELETE_USER,
        payload: info.data
        })
    }catch(error){
        console.log(error)
    }
}}

export function updateUser(){
    return async function (dispatch){
        try{
            var info = await axios.update(`http://localhost:5000/users/${id}`)
            return dispatch({
                type: UPDATE_TRAVEL,
                payload: info.data
        })       
            }catch(error){
                console.log(error)
            }
        }
    }
