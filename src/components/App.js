import React,{Component} from 'react';
import Nav from './Nav';
import {BrowserRouter as Router,Route,Redirect,Switch } from 'react-router-dom';
import {connect} from 'react-redux'
import Login from './Login';
import Questions from './Questions';
import VoteBlock from './VoteBlock';
import NewQuestion from './NewQuestion';
import LeaderBoard from './LeaderBoard';
import NotFound from './NotFound';
class App extends Component{
  render(){
    const user = this.props.authUser;
    const invalidUser = user==null||Object.keys(user).length===0;
    return (
      <Router>
       
          <div className="App">
          <Nav />
          <Switch>
            <Route 
              exact 
              path="/question/:id" 
              render=
              {(routeProps)=>invalidUser? <Login/>:<VoteBlock {...routeProps}/>
              }
            />
            <Route 
              exact 
              path="/add" 
              render=
              {(routeProps)=>invalidUser? <Redirect to="/" />:<NewQuestion  {...routeProps}/>}
            />
            <Route 
              exact 
              path="/leaderboard" 
              render=
              {(routeProps)=>invalidUser? <Redirect to="/" />:<LeaderBoard  {...routeProps}/>}
            />
            <Route exact path = "/" render=
            {(routeProps)=>
              invalidUser? <Login />:<Questions  {...routeProps}/>
            } />
            <Route component={NotFound} />

          </Switch>
          </div>
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
