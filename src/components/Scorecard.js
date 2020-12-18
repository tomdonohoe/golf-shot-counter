import React from 'react'


const Scorecard = (props) => {

    const holes = props.scores.map( (score, index) => {
        return <li key={index}>Hole {index + 1}: {score}</li>
    })

    return (
        <div>
            <h1>Scorecard</h1>
            <ul>
                {holes}
            </ul>
        </div>
    )
}

export default Scorecard