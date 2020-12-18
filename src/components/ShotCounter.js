import React from 'react'

const ShotCounter = ({currentHole, value, onChange, onClickPrev, onClickNext}) => {

    return (
        <div>
            <h1>Shot Counter</h1>
            <p>Hole {currentHole} Score</p>
            <button onClick={onClickPrev}>previous hole</button>
            <input type="number" value={value} onChange={(e) => onChange(e)}/>
            <button className="next" onClick={onClickNext}>next hole</button>
        </div>
    )
}

export default ShotCounter