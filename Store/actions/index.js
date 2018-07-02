import axios from 'axios'
const URL = "https://rn-ecommerce-app.firebaseio.com"
const FIREBASEDB = "https://rn-ecommerce-app.firebaseio.com"

export function getUsers(){
    const req = axios.get(`${URL}/users.json`)
        .then(res => res.data)

    return {
        type: 'GET_USERS',
        payload: req
    }

}


export function addUser(user){
    const req = axios({
        method:"POST",
        url: `${FIREBASEDB}/users.json`,
        data: user
        }).then(res => res.data)

    return {
        type: 'ADD_USER',
        payload: req
    }
}