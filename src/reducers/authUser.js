import {SET_AUTH_USER,REMOVE_AUTH_USER,UPDATE_AUTH_USER_ANSWER} from './../actions/authUser'

export default function authUser (state = null, action){
    switch(action.type){
        case SET_AUTH_USER:
            return action.user
        case REMOVE_AUTH_USER:
            return {};
        case UPDATE_AUTH_USER_ANSWER:
            let user = state;
            let {answers} =user;
            const { questionId,optionId} = action;
            answers[questionId]= optionId;
            user.answers = answers
            return user;
        default:
            return state;
    }


}