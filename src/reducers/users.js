import {GET_ALL_USERS,UPDATE_USER_ANSWER} from './../actions/users';

export default function users (state=[], action){
    switch(action.type){
        case GET_ALL_USERS:
            return action.users;
        case UPDATE_USER_ANSWER:
            const { userId,questionId,optionId} = action;
            let user = state.filter(user=>user.id===userId)[0];
            user.answers[questionId] = optionId;
            const remainingusers =state.filter(user=>user.id!==userId) 
            return [...remainingusers, user];
        default:
            return state;
    }
}