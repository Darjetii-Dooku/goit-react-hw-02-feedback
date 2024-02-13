import FeedbackMenu from './FeedbackMenu/FeedbackMenu'
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions'
import Statistics from './Statistics/Statistics'
import React, { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
};

  handleFeedback = option => {
  this.setState(prevState => ({ [option]: prevState[option] + 1 }));
};
  countTotalFeedback = () => {
      return this.state.good + this.state.bad + this.state.neutral
  };
  countPositiveFeedbackPercentage = (total) => {
      return (this.state.good / total * 100).toFixed()
  };

  render() { 
  const {good, neutral, bad } = this.state;
  const total = this.countTotalFeedback();
  const positivePercentage = this.countPositiveFeedbackPercentage();
  const options = Object.keys(this.state)
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Section title='Please leave feedback'>
          <FeedbackOptions options={options} onLeaveFeedback={this.handleFeedback} />
      <FeedbackMenu />
      </Section>
      <Section>
          <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />
      </Section>
      React homework template
    </div>
  );
}
}


export default App
