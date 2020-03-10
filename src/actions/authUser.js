export const SET_AUTH_USER =  'SET_AUTH_USER';
export const REMOVE_AUTH_USER =  'REMOVE_AUTH_USER';
export const UPDATE_AUTH_USER_ANSWER =  'UPDATE_AUTH_USER_ANSWER';

export function setAuthUser(user){
    return {
        type: SET_AUTH_USER,
        user
    }
}
export function removeAuthUser(){
    return {
        type: REMOVE_AUTH_USER,
    }
}

export function updateAuthUser({questionId,optionId}){
    return{
        type:UPDATE_AUTH_USER_ANSWER,
        questionId,
        optionId
    }
}