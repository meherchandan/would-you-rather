import React,{Component, Fragment} from 'react';
import Nav from './Nav';
import {BrowserRouter as Router,Route } from 'react-router-dom';
import {connect} from 'react-redux'
import Login from './Login';
class App extends Component{
  render(){
  
    console.log(this.props.authUser);
    return (
      <Router>
        <Fragment>
          <div className="App">
          <Nav />
          {
            Object.keys(this.props.authUser).length<=0? <Login />:null
          }
        
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
