import './App.css';
import React from 'react';
import DiceView from './views/DiceView';
import DMToolsView from './views/DMToolsView';
import Main from './views/Main';
import { BrowserRouter, Route } from 'react-router-dom';
import Character from './components/Character';

// const person1 = {name: "Jane", height: 72, mass: 45, hairColor: "Black", race: "Halfling", alignment: "Chaotic Neutral", stats: {Strength: 0, Dexterity: 0, Constitution: 0, Intelligence: 0, Wisdom: 0, Charisma: 0}};

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        {/* <Character person={person1}/> */}
        {/* <Character /> */}
        {/* <FunctionalCounter count={5} /> */}
        {/* <DiceView /> */}
        <Route exact path="/">
          <Main />
        </Route>

        <Route exact path="/dice">
          <DiceView />
        </Route>

        <Route exact path="/characterMaker">
          <Character />
        </Route>

        <Route exact path="/dm/tools">
          <DMToolsView />
        </Route>

        <Route exact path="/dm/tools/NPCMaker">
          {/* <NPCMaker /> */}
        </Route>

        <Route exact path="/dm/tools/savedNPC">
          {/* <NPCsView /> */}
        </Route>



      </BrowserRouter>
    </div>
  )
}

export default App;
