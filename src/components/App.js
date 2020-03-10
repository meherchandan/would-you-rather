import React,{Component, Fragment} from 'react';
import Nav from './Nav';
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import {connect} from 'react-redux'
import Login from './Login';
import Questions from './Questions';
import VoteBlock from './VoteBlock';
import NewQuestion from './NewQuestion';
class App extends Component{
  render(){
    const user = this.props.authUser;
    console.log(this.props)
    const invalidUser = user==null||Object.keys(user).length===0;
    return (
      <Router>
        <Fragment>
          <div className="App">
          <Nav />
          <Route 
            exact 
            path="/question/:id" 
            // component={VoteBlock}
            render=
            {(routeProps)=>invalidUser? <Login />:<VoteBlock {...routeProps}/>
            }
          />
          <Route 
            exact 
            path="/new_question" 
            render=
            {()=>invalidUser? <NewQuestion />:<NewQuestion />}
          />
          <Route exact path = "/" render=
          {()=>
            invalidUser? <Login />:<Questions />
          } />

          </div>
        </Fragment>
      </Router>
    );
  }

}
const mapStateToProps = (state, ownProps) => {
  return {
    authUser: state.authUser
  }
}

export default connect(mapStateToProps)(App);
