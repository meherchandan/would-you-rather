import {_getUsers} from './../utils/_DATA';
export const GET_ALL_USERS= 'GET_ALL_USERS';


export function getUsers(users){
    return{
        type:GET_ALL_USERS,
        users
    }
}

export function getAllUsers(){
    return dispatch=>{
        return _getUsers()
            .then(users=>{
                console.log(users);
                return dispatch(getUsers(Object.values(users)))
            }
            )
    }
}