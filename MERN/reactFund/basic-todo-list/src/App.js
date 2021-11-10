import './App.css';
import ToDos from './Components/ToDos';
import Form from './Components/Form';
import 'bootstrap/dist/css/bootstrap.css'
import React, { useState } from 'react';



function App() {
  const [myTodo, setMyTodo] = useState([]);

  const addMyTodo = (todo) => {
    // Do something
    setMyTodo(todo);
  }

  return (
    <div className="container row">
      <Form onSubmitTodo={addMyTodo} />
      <ToDos oneTodo={myTodo} />
    </div>
  );
}

export default App;
