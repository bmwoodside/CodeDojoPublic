import './App.css';
// import { useEffect } from 'react'
import GetPokemon from './Components/GetPokemon';
import FetchPokemon from './Components/FetchPokemon';

function App() {

  return (
    <div className="App">
      {/* <GetPokemon /> */}
      <FetchPokemon />
    </div>
  );
}

export default App;
