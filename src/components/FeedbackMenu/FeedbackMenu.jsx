import React, { Component } from 'react'

class FeedbackMenu extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }
    handlerClick = (button) => {
    this.setState(prevState => ({
        [button]: prevState[button] + 1
    }));
    }
    countTotalFeedback = () => {
        return this.state.good + this.state.bad + this.state.neutral
    }
    countPositiveFeedbackPercentage = (total) => {
        return (this.state.good / total * 100).toFixed()
    }
  render() {
    const {good, neutral, bad} = this.state
    return (
        <div>
        <div>
        <h2>Please leave feedback</h2>
        <ul>
            <li>
                <button onClick={()=> this.handlerClick('good')}>Good</button>
            </li>
            <li>
                <button onClick={()=> this.handlerClick('neutral')}>Neutral</button>
            </li>
            <li>
                <button onClick={()=> this.handlerClick('bad')}>Bad</button>
            </li>
        </ul>
        </div>
        <div>
            <h2>Statistics</h2>
            <ul>
                <li>Good: <span>{good}</span></li>
                <li>Neutral: <span>{neutral}</span></li>
                <li>Bad: <span>{bad}</span></li>
                <li>Total: <span>{this.countTotalFeedback()}</span></li>
                <li>Positive feedback: <span>{this.countPositiveFeedbackPercentage(this.countTotalFeedback())}%</span></li>
            </ul>
        </div>
      </div>
    )
  }
}

export default FeedbackMenu
