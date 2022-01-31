import React from "react";


const RollDice = (props) => {

    const rollDice = (diceSides) => {
        const tempRoll = Math.floor(Math.random() * diceSides) + 1
        return props.diceOutput(tempRoll)
    }


    return (
        <div>
            {/* <img src="../public/static/img/" onClick={rollDice(props.dice)}></img> */}
            <button onClick={() => rollDice(props.dice)}>Roll d{props.dice}</button>
        </div>
    )
}

export default RollDice;