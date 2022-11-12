const initialState = {
    users: [],
    blog:[],
    catalog:[]
}

function rootReducer(state= initialState, action){
    switch(action.type){
        case 'GET_CATALOG':
            return{
                ...state,
                    activities: action.payload
            }

        case 'GET_TRAVEL':
            return{
                ...state,
                activities: [...state.activities, action.payload]
            }
        
        case 'ADD_TRAVEL':
            return{                        ...state,
                activities: [...state.activities, action.payload]}

        case 'DELETE_TRAVEL':
            return{                        ...state,
                activities: [...state.activities, action.payload]}
    
        case 'UPDATE_TRAVEL':
            return{                        ...state,
                activities: [...state.activities, action.payload]}
            
        case 'GET_BLOG':
            return{...state,
                activities: action.payload}

        case 'GET_POST':
            return{                        ...state,
                activities: [...state.activities, action.payload]}
    
        case 'ADD_POST':
            return{                        ...state,
                activities: [...state.activities, action.payload]}
        
        case 'DELETE_POST':
            return{                        ...state,
                activities: [...state.activities, action.payload]}

        case 'UPDATE_POST':
            return{                        ...state,
                activities: [...state.activities, action.payload]}
    
        case 'GET_USERS':
            return{...state,
                activities: action.payload}
                
        case 'GET_USER':
            return{                        ...state,
                activities: [...state.activities, action.payload]}
            
        case 'ADD_USER':
            return{                        ...state,
                activities: [...state.activities, action.payload]}
    
        case 'DELETE_USER':
            return{                        ...state,
                activities: [...state.activities, action.payload]}
                    
        case 'UPDATE_USER':
            return{                        ...state,
                activities: [...state.activities, action.payload]}
        
        default:
            return state;
            }
}