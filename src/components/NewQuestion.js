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
        console.log(event.target)
        this.setState(()=>(this.setState({optionOne:event.target.value,error:false})))
    }
    onChangeOptionTwo= (event)=>{
        this.setState(()=>(this.setState({optionTwo:event.target.value,error:false})))
    }
    onSubmit = ()=>{
        const {optionOne,optionTwo,error} = this.state;
        const {authUser} = this.props;
        if(optionOne &&optionTwo &&!error){
            saveNewQuestion({
                optionOneText:optionOne, 
                optionTwoText:optionTwo, 
                author:authUser
            });
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
                <form  noValidate autoComplete="off" style={{ display: 'flex',flexDirection: 'column'}} >
                    <div className="new-question-text-field">
                        <TextField 
                            id="standard-basic" 
                            fullWidth 
                            // value={this.state.optionOne}
                            placeholder="Enter Option one text here"
                            onChange={(e)=>this.onChangeOptionOne(e)}
                        />
                    </div>
                    <div className="new-question-text-field">
                        <TextField 
                            id="standard-basic" 
                            fullWidth 
                            value={this.state.optionTwo}
                            placeholder="Enter Option two text here"
                            onChange={(e)=>{this.onChangeOptionTwo(e)}}
                        />
                    </div>
                    <div style={{ paddingTop: '20px'}}>
                    <Button variant="contained" onClick={()=>this.onSubmit()} color="primary">Submit
                    </Button>
                    </div>
                </form>
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