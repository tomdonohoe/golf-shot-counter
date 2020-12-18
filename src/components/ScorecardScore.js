import React from 'react'

function ScorecardScore({ holeNumber, holeScore }) {

    return (
        <div className="scorcardScore">
            <div className="holeNumber">
                {holeNumber}
            </div>
            <div className="holeScore">
                {holeScore}
            </div>
        </div>
    )
}

export default ScorecardScore