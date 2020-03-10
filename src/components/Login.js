import React, { Component } from 'react';
import {getAllUsers} from './../actions/users';
import {setAuthUser} from './../actions/authUser';
import {connect} from 'react-redux';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
class Login extends Component {
    state={
        authUser:{},
        selectedUser:'',
        error:false,
    }
    componentDidMount(){
        const {dispatch} = this.props;
        dispatch(getAllUsers());

    }
    handleChange = (event)=>{
        const auth = this.props.users.filter(user=>user.id===event.target.value);
        this.setState(()=>({error:false,selectedUser:event.target.value,authUser:auth[0]}));
        if(!event.target.value){
            this.setState((prevState)=>({error:!prevState.error}))
        }

    }
    onSubmit = ()=>{
        const {dispatch} = this.props;
        if(this.state.authUser){
            dispatch(setAuthUser(this.state.authUser));
        }
        else{
            this.setState(()=>({error:true}))
        }
    }
    render() {
        return (
            <div className="login-screen">
                <div className="login-title">
                    <h3> Welcome to Would You Rather App!</h3>
                </div>
                <div className="login-form">
                    <FormControl>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={this.state.selectedUser}
                        onChange={(e)=>this.handleChange(e)}
                        displayEmpty
                        className="login-user-list"
                        required
                        >
                        <MenuItem value="" ><em>None</em></MenuItem>
                            {this.props.users.map(user=><MenuItem key={user.id} value={user.id}>{user.name}</MenuItem>)}
                        </Select>
                        {this.state.error&&<p className="error">Please select a user</p>}
                        <div className="login-btn" >
                            <Button variant="contained" onClick={(e)=>{this.onSubmit(e)}} color="primary">
                            Submit
                            </Button>
                        </div>
                       
                    </FormControl>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(Login)
