import Axios  from 'axios '
const URL = "https://jsonplaceholder.typicode.com"

export function getUsers(){
    const req = Axios.get(`${URL}/posts`)
        .then(res => res.data)

    return {
        type: 'GET_USERS',
        payload: req
    }

}