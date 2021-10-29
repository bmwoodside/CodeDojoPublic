import './App.css';

import PersonCard from './Components/PersonCard'

const person1 = {firstName: "Jane", lastName: "Doe", age: "45", hairColor: "Black"}
const person2 = {firstName: "John", lastName: "Smith", age: "88", hairColor: "Brown"}
const person3 = {firstName: "Millar", lastName: "Fillmore", age: "50", hairColor: "Brown"}
const person4 = {firstName: "Maria", lastName: "Smith", age: "62", hairColor: "Brown"}


function App() {
  return (
    <div className="App">
      <PersonCard person={person1}></PersonCard>
      <PersonCard person={person2}></PersonCard>
      <PersonCard person={person3}></PersonCard>
      <PersonCard person={person4}></PersonCard>
    </div>
  );
}

export default App;
