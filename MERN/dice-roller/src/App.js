import './App.css';
import Character from './Components/Character';
import FunctionalCounter from './Components/FunctionalCounter';

const person1 = {name: "Jane", height: 72, mass: 45, hairColor: "Black", race: "Halfling", alignment: "Chaotic Neutral", stats: {Strength: 0, Dexterity: 0, Constitution: 0, Intelligence: 0, Wisdom: 0, Charisma: 0}};

function App() {
  return (
    <div className="App">
      {/* <Character person={person1}/> */}
      <Character />
      <FunctionalCounter count={5} />
    </div>
  );
}

export default App;
