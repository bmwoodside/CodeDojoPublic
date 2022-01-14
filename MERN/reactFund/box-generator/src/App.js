import './App.css';
import BoxMaker from './components/BoxMaker';
import BoxRender from './components/BoxRender';
import React, { useState } from 'react';



function App() {
  
  const [boxes, setBoxes] = useState([]);
  
  const addBox = (box) => {
    setBoxes([...boxes, box]);
  }

  return (
    <div className="App">
      <BoxMaker addBox={addBox}/>
      <BoxRender boxes={boxes}/>
    </div>
  );
}

export default App;
