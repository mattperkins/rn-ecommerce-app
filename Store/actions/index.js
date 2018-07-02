import axios from 'axios'
const FIREBASEDB = "https://rn-ecommerce-app.firebaseio.com"
const APIKEY = "AIzaSyCSZLvYFfswlYRgasrtNBcHrCHh2acygik"
const REGISTER = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key="


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


export function updateUser(USER_ID){

    const req = axios({
        method: "PATCH",
        url: `${FIREBASEDB}/users/${USER_ID}.json`,
        data:{
            title: 'Updated Title',
            body: 'Updated Body'
        }
    }).then(res => res.data)

    return {
            type: 'UPDATE_USER',
            payload: req
        }

}


export function deleteUser(USER_ID){
    const req = axios({
        method: "DELETE",
        url: `${FIREBASEDB}/users/${USER_ID}.json`
    }).then(res => res.data)

    return {
        type: 'DELETE_USER',
        payload: req
    }
}



export function registerUser(data){

    const req = axios({

        method: "POST",
        url: `${REGISTER}${APIKEY}`,
        data:{
            email: data.email ,
            password: data.password,
            returnSecureToken: true
        },
        header:{
            "Content-Type": "application/json"
        }

    }).then(res => res.data)

    return {
        type: "USER-REGISTER",
        payload: req
    }
}