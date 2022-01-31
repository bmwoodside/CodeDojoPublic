import RollDice from '../components/RollDice'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DiceView = (props) => {

    const [diceValue, setDiceValue] = useState(0);

    return (
        <div className="dice-roller-app-view">
            <div className="container-col-left">
                <RollDice dice={4} diceOutput={setDiceValue} />
                <RollDice dice={8} diceOutput={setDiceValue} />
                <RollDice dice={12} diceOutput={setDiceValue} />
                <RollDice dice={2} diceOutput={setDiceValue} />
            </div>
            

            <div className='container-col-mid'>
                <div className='results-container'>
                    {diceValue === 0 || diceValue === undefined
                        ? <h2>Click a dice to roll!</h2>
                        : <>
                            <h2>You rolled a</h2>
                            <h2>{diceValue}</h2>
                        </>
                    }
                </div>

                <Link to="/"><button>Go back</button></Link>
            </div>

            <div className="container-col-right">
                <RollDice dice={6} diceOutput={setDiceValue} />
                <RollDice dice={10} diceOutput={setDiceValue} />
                <RollDice dice={20} diceOutput={setDiceValue} />
                <RollDice dice={100} diceOutput={setDiceValue} />
            </div>
            


        </div>
    );
}

export default DiceView;
