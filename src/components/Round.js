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
        this.setState({
            holeIndex: this.state.holeIndex - 1
        })
    }

    handleClickNext = () => {
            this.setState({
                holeIndex: this.state.holeIndex + 1
            })
    }

    render() {
        const { scores, holeIndex } = this.state

        return (
            <div className="round">
                <ShotCounter 
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