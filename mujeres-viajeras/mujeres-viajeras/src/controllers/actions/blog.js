import axios from axios

export function getblog(){
    return async function (dispatch){
        var json = await axios.get("http://localhost:5000/blog",{

        });
        return dispatch ({
        type: 'GET_BLOG',
        payload: json.data
        })
    }
}

export function getPost(){
    return async function (dispatch){
        try{
            var json = await axios.get(`http://localhost:5000/blog/${id}`)
            return dispatch({
                type: GET_POST,
                payload: json.data
            })
        }catch(error){
            console.log(error)
        }}}

export function addPost(){
    return async function (dispatch){
        try{
            var info = await axios.post(`http://localhost:5000/blog/${id}`)
            return dispatch ({
            type: ADD_POST,
            payload: info.data
        })
    }catch(error){
        console.log(error)
    }
    }}

export function deletePost(){
    return async function (dispatch){
        try{
        var info = await axios.delete(`http://localhost:5000/blog/${id}`)
        return dispatch({
        type: DELETE_POST,
        payload: info.data
        })
    }catch(error){
        console.log(error)
    }
}}

export function updatePost(){
    return async function (dispatch){
        try{
            var info = await axios.update(`http://localhost:5000/blog/${id}`)
            return dispatch({
                type: UPDATE_POST,
                payload: info.data
        })       
            }catch(error){
                console.log(error)
            }
        }
    }
