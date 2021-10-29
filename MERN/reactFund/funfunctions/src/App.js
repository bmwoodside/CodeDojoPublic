import './App.css';
import Form from './Components/Form';
import Fun from './Components/Fun';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Fun funprop='Banana'></Fun>
        <Form></Form>
      </header>
    </div>
  );
}

export default App;
