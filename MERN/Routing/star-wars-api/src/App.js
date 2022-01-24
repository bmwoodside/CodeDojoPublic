import './App.css';
import Form from './Components/Form';
import Result from './Components/Result';
import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  const [propData, setPropData] = useState({});

  const onFormSubmission = (formData) => {
    setPropData(formData);
    console.log(formData);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Form formData={onFormSubmission}/>
        <Result formData={propData}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
