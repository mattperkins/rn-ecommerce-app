export default function(state={},action){
    switch(action.type){
        case 'GET_USERS':
            return {...state,users:action.payload}
        case 'ADD_USER':
            return {...state,postSuccess:action.payload}
        case 'GET_ONE_USER':
            return {...state,post:action.payload}
        default: 
            return state       
    }
}