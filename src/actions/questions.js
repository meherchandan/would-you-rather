import {_getQuestions,_saveQuestion} from '../utils/_DATA';
import {addQuestionToUser} from './users';
import {addUserAnswer}  from './users';
export const GET_QUESTIONS = 'GET_QUESTIONS';
export const SET_USER_ANSWER = 'SET_USER_ANSWER';
export const ADD_QUESTION = 'ADD_QUESTION';
function getQuestions(questions){
    return{
        type:GET_QUESTIONS,
        questions
    }
}

function setAnswer(answer){
    return{
        type:SET_USER_ANSWER,
        answer

    }
}

function addQuestion(question){
    return{
        type:ADD_QUESTION,
        question
    }
}

export function handleUserAnswer(user,questionId,optionId){
    
        const answer = {
            userId: user.id,
            optionId,
            questionId
        }
        return dispatch=>{
            dispatch(setAnswer(answer));
            dispatch(addUserAnswer(answer))
        }


    
}

export function getAllQuestions(){
    return dispatch=>{
        return _getQuestions()
            .then(questions=>{
                return dispatch(getQuestions(Object.values(questions)))
            })
    }
}

export function saveNewQuestion(newQuestion){
    return dispatch=>{
        return _saveQuestion(newQuestion)
            .then(question=>{
                dispatch(addQuestionToUser(question))
                return dispatch(addQuestion(question))})
            
    }
}