import './App.css';
import Navbar from './components/Navbar';
import FormWrapper from './components/FormWrapper';
import {MyContext} from './context/MyContext';
import BigState from './context/BigState';
import Display from './components/Display';
import { useState } from 'react';
import Form from './components/Form';
import ReduceMe from './components/ReduceMe';

function App() {

  const [username, setUsername] = useState('');

  const [form, setForm] = useState("test data");
  const [state, setState] = useState("the other state data");

  return (
    // <MyContext.Provider value={{username, setUsername}}>
    //   <Navbar />
    //   <FormWrapper />
    // </MyContext.Provider>

    <BigState.Provider value={{form, setForm, state}}>
      {/* <Form />
      <Display /> */}
      <ReduceMe />
    </BigState.Provider>
  );
}

export default App;
