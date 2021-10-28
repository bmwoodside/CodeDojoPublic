import './App.css';

import Header from './Components/Header'

function App() {

  let myname = "Bob"

  return (
    <div className="App">
      <header className="App-header">
        <Header yournamehere={ myname }>
          <p>This is Your Child</p>
          <p>This is also your child</p>
        </Header>

        <button onClick={ () => alert("Ouch") }>This little button</button>
      </header>
    </div>
  );
}

export default App;
