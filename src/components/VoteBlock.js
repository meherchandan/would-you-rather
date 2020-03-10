import React, { Component,Fragment } from 'react'
import {connect } from 'react-redux';
import {Link, Redirect} from "react-router-dom";
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {handleUserAnswer} from '../actions/questions';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';
import ProgressBar from './ProgressBar';
class VoteBlock extends Component {
    state={
        selectedOption:'',
        redirectResult:false,
    }

    handleChange =(e)=>{
        const value = e.target.value;
        this.setState(()=>({selectedOption:value}))
    }
    onSubmit = (e)=>{
        e.preventDefault();
        const {dispatch, authUser,question} = this.props;
        dispatch(handleUserAnswer(authUser,question.id,this.state.selectedOption));
        this.setState({redirectResult:true});
    }
    render() {
        console.log(this.props);
        const {question,authUser,users} = this.props;
        const author = users.filter(user=>user.id==question.author)[0];
        if(authUser==null){
            return <Redirect to = "/" />
        }
        const answered = Object.keys(authUser.answers).includes(question.id);
        const optionOneVotes = question.optionOne.votes.length;
        const optionTwoVotes = question.optionTwo.votes.length;
        const totalVotes = optionOneVotes + optionTwoVotes;

        const optionOnePercentage = answered?Math.floor(optionOneVotes/totalVotes* 100) :0;
        const optionTwoPercentage = answered?Math.floor(optionTwoVotes/totalVotes * 100) :0;
        return (
            <div className="question" style={{width:'30%'}}>
            <div className="question-author">
                <h3>{author.name} asks</h3>
            </div>
            <div>
                <div className="question-container">
                    <div className="question-user">
                        <div style={{
                            backgroundImage:`url(${author.avatarURL})`,
                            width: '75px',
                            height: '75px',
                            backgroundSize: 'contain',
                            borderRadius: '40px',
                            margin:'auto'
                            }}>
                        </div>
                    </div>
                    {
                        answered?
                        <div className="votes-block">
                            <div className={ `question-option-result ${optionOnePercentage>optionTwoPercentage?'green-result':''}`} >
                            <h3>{question.optionOne.text}</h3>
                            {optionOneVotes>0?
                            <Fragment>
                                <ProgressBar percentage={optionOnePercentage} />
                                {optionOneVotes} vote{optionOneVotes>1?'s':''} out of {totalVotes}
                            </Fragment>:<div className="no-vote">No Votes</div>
                            }
                            </div>
                            <div className={ `question-option-result ${optionOnePercentage<optionTwoPercentage?'green-result':''}`} >
                            <h3>{question.optionTwo.text}</h3>
                            {optionTwoVotes>0?
                            <Fragment>
                                <ProgressBar percentage={optionTwoPercentage} />
                                {optionTwoVotes} vote{optionTwoVotes>1?'s':''} out of {totalVotes}
                            </Fragment>
                            : <div className="no-vote">No Votes</div>
                            }
                            
                            </div>
                        </div>:  
                        <div>
                        <RadioGroup aria-label="poll" name="poll" value={this.state.selectedOption} onChange={(e)=>this.handleChange(e)}>
                        <FormControlLabel value="optionOne" id ="optionOne" control={<Radio />} label={question.optionOne.text} />
                        <FormControlLabel value="optionTwo" id ="optionTwo" control={<Radio />} label={question.optionTwo.text} />
                        </RadioGroup>
                    </div>
                    }
                   
                    
                </div>
                {
                    !answered && 
                    <div className="question-vote">

                        <Button variant="contained" onClick={(e)=>{this.onSubmit(e)}} color="primary">
                            Submit
                        </Button>
                    </div>
                }
                    
            </div>
        </div>

        )
    }
}
const mapStateToProps = (state, ownProps) => {
    console.log(state);
    console.log(ownProps);
    return {
        question: state.questions.filter(question=>question.id===ownProps.match.params.id)[0],
        authUser: state.authUser,
        users: state.users
    }
}
export default connect(mapStateToProps)(VoteBlock);