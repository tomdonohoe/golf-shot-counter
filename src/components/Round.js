import React from 'react'
import ShotCounter from './ShotCounter.js'
import Scorecard from './Scorecard.js'

class Round extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            scores: Array(18).fill(0),
            holeIndex: 0
        }
    }

    handleClickScoring = (e) => {
        let scores = [...this.state.scores]
        let holeIndex = this.state.holeIndex
        let currentScore = scores[holeIndex]
        let isAdd = e.target.textContent === '+'

        if (isAdd) {
            scores[holeIndex] = currentScore + 1
        } else {
            scores[holeIndex] = currentScore - 1
        }
        
        this.setState({
            scores: scores
        })   
    }

    handleClickPrev = () => {
        if (this.state.holeIndex === 0) {
            return
        }

        this.setState({
            holeIndex: this.state.holeIndex - 1
        })
    }

    handleClickNext = () => {
        if (this.state.holeIndex > 16) {
            return
        }

        this.setState({
            holeIndex: this.state.holeIndex + 1
        })
    }

    render() {
        const { scores, holeIndex } = this.state

        return (
            <div className="round">
                {/* <Counter /> */}
                <ShotCounter 
                    currentHole={holeIndex + 1}
                    value={scores[holeIndex]}
                    onClick={this.handleClickScoring}
                    onClickPrev={this.handleClickPrev}
                    onClickNext={this.handleClickNext}
                    />
                <Scorecard scores={scores} />
            </div>
        )
    }
}

export default Round