import './App.css';
import React from 'react';
import Main from './views/Main';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Detail from './components/Detail';
import Update from './views/Update';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>

        <Route exact path="/api/products/">
          <Main />
        </Route>

        <Route exact path="/api/products/:id">
          <Detail />
        </Route>

        <Route exact path="/api/products/:id/edit">
          <Update />
        </Route>

      </div>
    </BrowserRouter>
  );
}

export default App;
