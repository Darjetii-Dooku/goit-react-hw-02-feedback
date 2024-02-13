import React from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <ul>
            {options.map(option => (
                <li key={option}>
                    <button type="button" onClick={() => onLeaveFeedback(option)}>
                        {option}
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default FeedbackOptions;