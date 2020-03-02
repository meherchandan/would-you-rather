import {_getQuestions} from '../utils/_DATA';
export const GET_QUESTIONS = 'GET_QUESTIONS';

export function getQuestions({questions}){
    return{
        type:GET_QUESTIONS,
        questions
    }
}

export function getAllUsers(){
    return dispatch=>{
        return _getQuestions()
            .then(users=>{
                dispatch(getQuestions(users))
            })
    }
}