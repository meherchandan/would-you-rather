import React from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
function UnanweredQuestion({question,user,onVote}) {
    return (
        <div className="question">
            <div className="question-author">
                <h3>{user.name} asks</h3>
            </div>
            <div>
                <div className="question-container">
                    <div className="question-user">
                        <div style={{
                            backgroundImage:`url(${user.avatarURL})`,
                            width: '75px',
                            height: '75px',
                            backgroundSize: 'contain',
                            borderRadius: '40px',
                            margin:'auto'
                            }}>
                        </div>
                    </div>
                    <div>
                        <h3 style={{color:'darkblue'}}>Would You Rather</h3>
                        <p>{question.optionOne.text}</p>
                    </div>
                </div>
                <div className="question-vote">
                    <Link to={`/question/${question.id}` } className="view-poll">
                            View Poll
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default connect()(UnanweredQuestion);
