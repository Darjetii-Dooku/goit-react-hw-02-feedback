import React from 'react';
import css from './FeedbackOptions.module.css'

const FeedbackOptions = ({ options, onLeaveFeedback, handleReset, total }) => {
    return (
        <ul className={css.list}>
            {options.map(option => (
                <li key={option}>
                    <button type="button" className={css.shineButton} onClick={() => onLeaveFeedback(option)}>
                        {option}
                    </button>
                </li>
            ))} 
                {total !== 0 && (
                        <li>
                        <button className={css.shineButton} type="button" onClick={() => handleReset()}>
                            Reset
                        </button>
                        </li> 
                )}                       
        </ul>
    );
};

export default FeedbackOptions;