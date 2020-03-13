import {ADD_QUESTION_TO_USER,GET_ALL_USERS,UPDATE_USER_ANSWER} from './../actions/users';

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
        case ADD_QUESTION_TO_USER:
            const { author,id} = action.question;
            let user1 = state.filter(user=>user.id===author)[0];
            user1.questions.push(id);
            const otherusers =state.filter(user=>user.id!==author) 
            return [...otherusers, user1];
        default:
            return state;
    }
}