import React, { Component } from 'react'
import {connect} from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {saveNewQuestion } from './../actions/questions';
class NewQuestion extends Component {
    state={
        optionOne:'',
        optionTwo:'',
        error:false,

    }
    onChangeOptionOne = (event)=>{
        const {value} = event.target;
        this.setState((prevState)=>({optionOne:value,error:false}))
    }
    onChangeOptionTwo= (event)=>{
        const {value} = event.target;
        this.setState((prevState)=>({optionTwo:value,error:false}))
    }
    onSubmit = ()=>{
        const {optionOne,optionTwo,error} = this.state;
        const {authUser,dispatch} = this.props;
        if(optionOne &&optionTwo &&!error){
            dispatch(saveNewQuestion({
                optionOneText:optionOne, 
                optionTwoText:optionTwo, 
                author:authUser.id
            }));
            this.props.history.push("/");
        }
        if(!optionOne ||!optionTwo){
            this.setState({error:true});
        }
    }
    render() {
        return (
            <div className="new-question">
                <div className="new-question-title">
                    <h2>Create New Question</h2>    

                </div>
                <div className="new-question-form">
                <h3>Would You Rather..</h3>
                <div   style={{ display: 'flex',flexDirection: 'column'}} >
                    <div className="new-question-text-field">
                        <TextField 
                            id="option-one" 
                            fullWidth 
                            error={!Boolean(this.state.optionOne) &&this.state.error}
                            value={this.state.optionOne}
                            placeholder="Enter Option one text here"
                            onChange={(e)=>this.onChangeOptionOne(e)}
                        />
                    </div>
                    <div className="new-question-text-field">
                        <TextField 
                            id="option-two" 
                            fullWidth 
                            error={!Boolean(this.state.optionTwo)&&this.state.error}
                            value={this.state.optionTwo}
                            placeholder="Enter Option two text here"
                            onChange={(e)=>{this.onChangeOptionTwo(e)}}
                        />
                    </div>
                    <div style={{ paddingTop: '20px'}}>
                    <Button variant="contained" onClick={()=>this.onSubmit()} color="primary">Submit
                    </Button>
                    </div>
                </div>
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        authUser: state.authUser
    }
}
export default connect(mapStateToProps)(NewQuestion);