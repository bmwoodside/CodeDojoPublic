import React, { useState } from "react";


const RollDice = (props) => {

    const [diceReturn, setDiceReturn] = useState(props.diceOutput===undefined?0:props.diceOutput);

    const rollDice = (diceSides) => {
        setDiceReturn(Math.floor(Math.random() * diceSides) + 1)
        return props.diceOutput(diceReturn)
    }


    return (
        <div>
            {/* <img src="../public/static/img/" onClick={rollDice(props.dice)}></img> */}
            <button onClick={() => rollDice(props.dice)}>Roll d{props.dice}</button>
            {console.log(diceReturn)}
        </div>
    )
}

export default RollDice;