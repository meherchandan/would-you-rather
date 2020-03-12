import React, { Component } from 'react'
import {connect} from 'react-redux';
import LeaderBoardCard from './LeaderBoardCard';
class LeaderBoard extends Component {
    render() {
        const newUsers = this.props.users.map(user=>
            {
                return {
                    ...user,score:Object.keys(user.answers).length+user.questions.length
                }
            }).sort((a,b)=>b.score-a.score) ;
            console.log(newUsers)
        return (
            <div className="leaderboard">
                <h2>Leader Board</h2>
                {
                    newUsers.map(user=><LeaderBoardCard key = {user.id} user={user }/>)
                }
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(LeaderBoard);