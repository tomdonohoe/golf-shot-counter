import React from 'react';

const ShotCounter = ({currentHole, value, onClick, onClickAdd, onClickSubtract, onClickPrev, onClickNext}) => {

    return (
        <div className="shotcounter">

            <h2>Shot Counter</h2>

            <h3>Hole {currentHole} Score</h3>

            <div className="counter">
                <button onClick={onClick}>-</button>
                <p className="score">{value}</p>
                {/* <input type="number" value={value} onChange={(e) => onChange(e)}/> */}
                <button onClick={onClick}>+</button>
            </div>

            <div className="holenav">
                <button onClick={onClickPrev}>previous hole</button>
                <button className="next" onClick={onClickNext}>next hole</button>
            </div>
        </div>
    )
}

export default ShotCounter