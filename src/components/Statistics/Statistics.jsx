import React from 'react';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <div>
            <h2>Statistics</h2>
            <ul>
                <li>Good: {good}</li>
                <li>Neutral: {neutral}</li>
                <li>Bad: {bad}</li>
                <li>Total: {total}</li>
                <li>Positive Percentage: {positivePercentage}%</li>
            </ul>
        </div>
    );
};

export default Statistics;