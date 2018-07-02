export default function(state={},action){
    switch(action.type){
        case 'GET_USERS':
            return {...state,users:action.payload}
        case 'ADD_USER':
            return {...state,userSuccess:action.payload}
        case 'GET_ONE_USER':
            return {...state,user:action.payload}
        case 'UPDATE_USER':
            return {...state,userUpdate:action.payload}
        case 'DELETE_USER':
            return {...state,userDelete:action.payload}
        default: 
            return state       
    }
}