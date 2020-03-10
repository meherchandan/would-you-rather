import React from 'react'

export default function ProgressBar({percentage}) {
    return (
        <div className="progress-bar">
            <div className="fill-percentage" style={{width:`${percentage}%`}}>

            </div>
            
        </div>
    )
}
