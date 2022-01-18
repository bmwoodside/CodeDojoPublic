import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import WordGuess from './components/WordGuess';

import { useState } from 'react';

function App() {

  const answer = "tears";
  const [wordGuess, setWordGuess] = useState('');
  const [submittedGuess, setSubmittedGuess] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // axios.get("https://api.dictionaryapi.dev/api/v2/entries/en/" + wordGuess)
    //   .then(res => {
    //     console.log(res.data);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   })
  }




  return (
    <div className="App">
      <h1>hey it's me!</h1>
      <form onSubmit={onSubmitHandler}>
        <input type="text" onChange={(e) => {setWordGuess(e.target.value)}} minLength={5} maxLength={5} />
        <input type="submit" value="Check Word" />
      </form>

      <WordGuess guess={submittedGuess} answer={answer} />

    </div>
  );
}

export default App;
