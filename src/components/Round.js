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

    handleChange = (e) => {
        const scores = [...this.state.scores]
        const holeIndex = this.state.holeIndex

        scores[holeIndex] = e.target.value

        this.setState({
            scores: scores
        })
        console.log('change')
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
                <ShotCounter 
                    currentHole={holeIndex + 1}
                    value={scores[holeIndex]}
                    onChange={this.handleChange}
                    onClickPrev={this.handleClickPrev}
                    onClickNext={this.handleClickNext}
                    />
                <Scorecard scores={scores} />
            </div>
        )
    }
}

export default Round