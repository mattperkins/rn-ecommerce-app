import axios from 'axios'
const FIREBASEDB = "https://rn-ecommerce-app.firebaseio.com"

export function getUsers(){
    const req = axios.get(`${FIREBASEDB}/users.json`)
        // .then(res => res.data)
        .then(res => {
            let users = []

            for(let key in res.data){
                users.push({
                    ...res.data[key],
                    id:key
                })
            }
            return users
        })

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

export function getOneUser(USER_ID){
    const req = axios(`${FIREBASEDB}/users/${USER_ID}.json`)
        .then(res => {
            const getOneUser = {
                ...res.data,
                id: USER_ID
            }
            return getOneUser
        })

        return {
            type: 'GET_ONE_USER',
            payload: req
        }
}