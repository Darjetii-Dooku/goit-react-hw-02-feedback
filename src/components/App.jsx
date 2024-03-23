import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions'
import Statistics from './Statistics/Statistics'
import { useEffect, useState } from "react";
import Notification from './Notification/Notification'

const initialState = {
    good: 0,
    neutral: 0,
    bad: 0
};
export const App = () => {
  const [clicks, setClicks] = useState(() => {
  const stringifiedClicks = localStorage.getItem("clicks");
  const parsedClicks = JSON.parse(stringifiedClicks) ?? initialState;
  return parsedClicks;
});
  

  const handleFeedback = option => {
  setClicks({...clicks, [option]: clicks[option] + 1 });
};
  const countTotalFeedback = () => {
      return clicks.good + clicks.bad + clicks.neutral
  };
  
  const countPositiveFeedbackPercentage = (total) => {
      return (clicks.good / total * 100).toFixed()
  };
  const handleReset = () => {
    setClicks(initialState)
  }
  useEffect(() => {
    localStorage.setItem("clicks", JSON.stringify(clicks));
  }, [clicks]);
  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage(total);
  const options = Object.keys(clicks)
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
        }
      }
    >
      <Section title='Please leave feedback 😇'>
          <FeedbackOptions options={options} onLeaveFeedback={handleFeedback} handleReset={handleReset} total={total}/>
      </Section>
     {clicks.good || clicks.bad || clicks.neutral ? 
     <Section>
          <Statistics good={clicks.good} neutral={clicks.neutral} bad={clicks.bad} total={total} positivePercentage={positivePercentage} />
      </Section> : <Notification />}
    </div>
  );
}
