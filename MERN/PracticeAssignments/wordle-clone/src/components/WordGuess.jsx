import React from 'react';

const WordGuess = (props) => {
    
    
    
    
    
    return (
        <div>
            {
                props.guess.split("").map((letter, i) => {
                    let classes = "letter";
                    const index = props.answer.indexOf(letter);
                    
                    if (index < 0) classes += " notInWord";
                    else if (index === i) classes += " correctLetter";
                    else classes += " sortaCorrect";

                    return <span key={i} className={classes}>{letter}</span>
                })
            }
        </div>
    )
}

export default WordGuess;