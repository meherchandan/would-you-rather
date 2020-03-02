import {SET_AUTH_USER,REMOVE_AUTH_USER} from './../actions/authUser'

export default function authUser (state = {}, action){
    switch(action.type){
        case SET_AUTH_USER:
            return action.user
        case REMOVE_AUTH_USER:
            return {};
        default:
            return state;
    }


}