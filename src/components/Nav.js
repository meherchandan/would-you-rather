import React,{Component} from 'react'
import {Link} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import {removeAuthUser} from './../actions/authUser';
import {connect} from 'react-redux';
class Nav extends Component {
    handleLogout = ()=>{
        this.props.dispatch(removeAuthUser())
    }
    render(){
        return (
            <div className="container">
                <h2 className="title">Would You Rather</h2>
                <AppBar position="static" color="primary">
                    <Toolbar style={{    display: 'flex',
                        justifyContent: 'space-between'}}>
                        <div>
                            <Button color="inherit">
                                <Link to="/" className ="nav-link" >Home</Link>
                            </Button>
                            <Button color="inherit">
                                <Link  className ="nav-link" to="/new_question" >New Question</Link>
                            </Button>
                            <Button color="inherit">
                                <Link to="/leaderboard" className ="nav-link">Leader Board</Link>
                            </Button>
                        </div>
                
                    {this.props.authUser && <div>
                        <div className="signed-in">
                            <Button color="inherit">USER DETAILS </Button>
                            <Button color="inherit">
                            <Link to="/" className ="nav-link" onClick={e=>this.handleLogout(e)}>Logout</Link>
                            </Button>
                            
                        </div>
                    </div>}
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        authUser: state.authUser
    }
}

export default connect(mapStateToProps)(Nav);