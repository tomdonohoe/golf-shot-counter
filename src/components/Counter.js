import React from 'react'

/* 
expect params:
    - onClick .. to handle the state on click
    - value .. the current counter value from the state
*/

const Counter = ({ onClick, value }) => {

    return (
        <div className="counter">
            <button onClick={onClick}>-</button>
            <p className="score">{value}</p>
            <button onClick={onClick}>+</button>
        </div>
        ) 
}

export default Counter