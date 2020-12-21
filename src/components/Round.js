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
            if (currentScore < 1) {
                return
            }
            scores[holeIndex] = currentScore - 1
        }
        
        this.setState({
            scores: scores
        })   
    }

    handleClickPagination = (e) => {
        let { holeIndex } = this.state
        let direction = e.target.textContent

        if (direction === 'prev') {
            if (holeIndex === 0) {
                return
            }
            this.setState({
                holeIndex: this.state.holeIndex - 1
            })
        } else {
            if (holeIndex > 16) {
                return
            }
            this.setState({
                holeIndex: this.state.holeIndex + 1
            })
        }
    }

    render() {
        const { scores, holeIndex } = this.state

        return (
            <div className="round">
                <ShotCounter 
                    currentHole={holeIndex + 1}
                    value={scores[holeIndex]}
                    onClickScoring={this.handleClickScoring}
                    onClickPagination={this.handleClickPagination}
                    />
                <Scorecard scores={scores} />
            </div>
        )
    }
}

export default Round