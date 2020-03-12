import React from 'react'

export default function LeaderBoardCard({user}) {
    const answeredQuestion = Object.keys(user.answers).length;
    const createdQuestion = user.questions.length;
    const  {name,avatarURL }= user;
    const score = answeredQuestion+ createdQuestion;
console.log(user);
    return (
        <div className="leaderboard-card">
            <div className="leaderboard-avatar">
                <div style={{
                    backgroundImage:`url(${avatarURL})`,
                    width: '80px',
                    height: '80px',
                    backgroundSize: 'contain',
                    borderRadius: '50px',
                }}></div>

            </div>
            <div className="leaderboard-info">
                <div className="leaderboard-info-head">
                    <h3>{name}</h3>
                </div>
                <div className="leaderboard-info-question">
                    <div className="leaderboard-info-detail">
                        <span>Answered Questions:</span>
                        <span>{answeredQuestion}</span>
                    </div>
                    <div className="leaderboard-info-detail">
                        <span>Created Questions:</span>
                        <span>{createdQuestion}</span>
                    </div>
                </div>
            </div>
            <div className="leaderboard-score">
                <div className="leaderboard-score-head">
                    <h3>Score</h3>
                </div>
                <div className="leaderboard-score-content">
                    {score}
                </div>
            </div>
        </div>
    )
}
