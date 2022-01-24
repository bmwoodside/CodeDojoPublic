import './App.css';
import Character from './Components/Character';
import FunctionalCounter from './Components/FunctionalCounter';
import RollDice from './Components/RollDice';
import React, { useEffect, useState } from 'react';

// const person1 = {name: "Jane", height: 72, mass: 45, hairColor: "Black", race: "Halfling", alignment: "Chaotic Neutral", stats: {Strength: 0, Dexterity: 0, Constitution: 0, Intelligence: 0, Wisdom: 0, Charisma: 0}};

function App() {

  const [diceValue, setDiceValue] = useState(0);

  useEffect(() => {
    console.log("app.js renderDice:", diceValue);
  }, [diceValue]);

  // const renderDice = (value) => {
    
  //   // console.log("app.js renderDice:", value);
  // }

  return (
    <div className="App">
      {/* <Character person={person1}/> */}
      {/* <Character /> */}
      {/* <FunctionalCounter count={5} /> */}

      <div className='dice-container' id='dice-btn-row-1'>
        <RollDice dice={4} diceOutput={setDiceValue} />
        <RollDice dice={6} diceOutput={setDiceValue} />
      </div>

      <div className='dice-container' id='dice-btn-row-2'>
        <RollDice dice={8} diceOutput={setDiceValue} />
        <RollDice dice={10} diceOutput={setDiceValue} />
      </div>

      <div className='results-container'>
        {diceValue === 0 || diceValue === undefined
          ? <h2>Click a dice to roll!</h2>
          : <>
            <h2>You rolled a</h2>
            <h2>{diceValue}</h2>
            <h2>!!!</h2>
          </>
        }
      </div>

      <div className='dice-container' id='dice-btn-row-3'>
        <RollDice dice={12} diceOutput={setDiceValue} />
        <RollDice dice={20} diceOutput={setDiceValue} />
      </div>
      
      <div className='dice-container' id='dice-btn-row-3'>
        <RollDice dice={2} diceOutput={setDiceValue} />
        <RollDice dice={100} diceOutput={setDiceValue} />
      </div>
      
      
    </div>
  );
}

export default App;
