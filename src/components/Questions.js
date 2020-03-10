import React, { Component } from 'react'
import {connect } from 'react-redux';
import {getAllQuestions} from './../actions/questions';
import UnansweredQuestion from './UnansweredQuestion';
import {Redirect} from'react-router-dom';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Result from './Result';
function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </Typography>
    );
  }
class Questions extends Component {

    state={
        tabValue:0,

    }
    componentDidMount(){
        const {dispatch} = this.props;
        dispatch(getAllQuestions());
    }
    onVote = (e,id)=>{
        return <Redirect to="/test" />
    }
    handleChange = (event, newValue) => {
        this.setState({tabValue:newValue})
      };
    handleChangeIndex = (e)=>{
        console.log("index",e.target);
    }


    render() {
        if(Object.keys(this.props.authUser).length===0){
            return <Redirect to="/" />
        }
        const authUserAnswered = Object.keys(this.props.authUser.answers);
        const unAnsweredQuestions = this.props.questions.filter(question=>!authUserAnswered.includes(question.id));
        const answeredQuestions = this.props.questions.filter(question=>authUserAnswered.includes(question.id));
        return (
            <div className="dashboard-container">
                <AppBar position="static" color="default">
                    <Tabs
                    value={this.state.tabValue}
                    onChange={(e,v)=>this.handleChange(e,v)}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                    >
                    <Tab label="Unanswered Questions" value={0}/>
                    <Tab label="Answered Questions" value={1}/>
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    index={this.state.tabValue}
                    onChangeIndex={(e)=>this.handleChangeIndex(e)}
                >
                    <TabPanel value={this.state.tabValue} index={0} >
                    {unAnsweredQuestions.length>0?unAnsweredQuestions.map(question=>(
                        <UnansweredQuestion 
                            key={question.id}
                            question = {question}
                            user={this.props.users.filter(user=>user.id===question.author)[0]}
                            />
                    )):<div>You have answered all questions</div>}
                    </TabPanel>
                    <TabPanel value={this.state.tabValue} index={1}>
                    {answeredQuestions.length>0? answeredQuestions.map(question=>(
                        <Result 
                            key={question.id}
                            question = {question}
                            user={this.props.users.filter(user=>user.id===question.author)[0]}
                            onVote={this.onVote}
                            />
                    )):<div>You haven't answer any question</div>}
                    </TabPanel>
                
                </SwipeableViews>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log("ownprops",ownProps);
    return {
        authUser:state.authUser,
        questions: state.questions,
        users:state.users,
    }
}
export default connect(mapStateToProps)(Questions);
