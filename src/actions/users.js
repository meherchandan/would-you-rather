import {_getUsers} from './../utils/_DATA';
export const GET_ALL_USERS= 'GET_ALL_USERS';
export const UPDATE_USER_ANSWER= 'UPDATE_USER_ANSWER';


function getUsers(users){
    return{
        type:GET_ALL_USERS,
        users
    }
}


 export function addUserAnswer({userId,questionId,optionId}){
    return{
        type:UPDATE_USER_ANSWER,
        userId,
        questionId,
        optionId
    }
}


export function getAllUsers(){
    return dispatch=>{
        return _getUsers()
            .then(users=>{
                return dispatch(getUsers(Object.values(users)))
            }
            )
    }
}
