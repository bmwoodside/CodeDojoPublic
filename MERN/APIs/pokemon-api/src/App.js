import './App.css';
// import { useEffect } from 'react'
import GetPokemon from './Components/GetPokemon';
import FetchPokemon from './Components/FetchPokemon';

function App() {

  return (
    <div className="App">
      {/* <FetchPokemon /> */}
      <GetPokemon />
    </div>
  );
}

export default App;
