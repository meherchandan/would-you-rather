
import React, { Component,Fragment } from 'react';
import {ProgressBar} from './ProgressBar';

export default class ResultVoteOption extends Component {
    render() {
        const {question, clsName,votes, totalVotes,percentage} = this.props;
        return (
            <div className={clsName} >
            <h3>{question.optionOne.text}</h3>
            {votes>0?
            <Fragment>
                <ProgressBar percentage />
                {votes} vote{votes.length>1?'s':''} out of {totalVotes}
            </Fragment>:<div className="no-vote">No Votes</div>
            }
        </div>
        )
    }
}



