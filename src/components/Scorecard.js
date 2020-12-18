import React from 'react'
import ScorecardScore from './ScorecardScore.js'


const Scorecard = ({ scores }) => {

    const holes = scores.map( (score, index) => {
        return <ScorecardScore holeNumber={index + 1} holeScore={score} />
    })

    return (
        <div>
            <div className="scorecardWrapper">
                <h1>Scorecard</h1>
                <div className="scorecard">
                    {holes}
                </div>   
            </div>
        </div>
    )
}

export default Scorecard