import React from 'react';
import Counter from './Counter.js'

const ShotCounter = ({currentHole, value, onClickScoring, onClickPagination}) => {

    return (
        <div className="shotcounter">

            <h2>Shot Counter</h2>
            <h3>Hole {currentHole} Score</h3>

            <Counter onClick={onClickScoring} value={value} />

            <div className="holenav">
                <button onClick={onClickPagination}>
                    prev
                </button>
                <button onClick={onClickPagination}>
                    next
                </button>
            </div>
        </div>
    )
}

export default ShotCounter