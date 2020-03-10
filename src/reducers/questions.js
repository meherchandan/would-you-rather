import {GET_QUESTIONS,SET_USER_ANSWER,ADD_QUESTION} from './../actions/questions';

export default function questions (state=[], action){
    switch(action.type){
        case GET_QUESTIONS:
            return action.questions
        case SET_USER_ANSWER:
            const {userId,optionId,questionId} = action.answer;
            let question = state.filter(question=>question.id===questionId)[0];
            let votes = question[optionId].votes;
            votes.push(userId);
            question[optionId].votes = votes;
            const remainingQuestion = state.filter(question=>question.id!==questionId)
            return [...remainingQuestion,question]
        case ADD_QUESTION:
            return [...state,action.question]
        default:
            return state;
    }
}