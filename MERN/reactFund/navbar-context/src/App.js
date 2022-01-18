import './App.css';
import Navbar from './components/Navbar';
import FormWrapper from './components/FormWrapper';
import {MyContext} from './context/MyContext';
import { useState } from 'react';

function App() {

  const [username, setUsername] = useState('');

  return (
    <MyContext.Provider value={{username, setUsername}}>
      <Navbar />
      <FormWrapper />
    </MyContext.Provider>
  );
}

export default App;
