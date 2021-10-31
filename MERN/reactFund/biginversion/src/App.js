import './App.css';
import PersonCard from './Components/PersonCard'

const person1 = {firstName: "Jane", lastName: "Doe", age: 45, hairColor: "Black"}
const person2 = {firstName: "John", lastName: "Smith", age: 88, hairColor: "Brown"}
const person3 = {firstName: "Millar", lastName: "Fillmore", age: 50, hairColor: "Brown"}
const person4 = {firstName: "Maria", lastName: "Smith", age: 62, hairColor: "Brown"}

// console.log(person1)
// console.log(PersonCard(person1))
function App() {
  return (
    <div className="App">
      <PersonCard firstName="test1" lastName="test2" age="test3" hairColor="test4"/>
      <PersonCard person={person1} />
      <PersonCard person={person2} />
      <PersonCard person={person3} />
      <PersonCard person={person4} />
    </div>
  );
}

export default App;
