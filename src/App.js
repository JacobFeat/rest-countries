import logo from './logo.svg';
import './App.css';

function giveSurnameFirst({firstName, surname}){
  return `${surname} ${firstName}`;
}

const student = {
  firstName: "John",
  surname: "Jadovsky",
  age: 24,
};

const studentIntroduction = (
  <p>{giveSurnameFirst(student)}</p>
);

function Welcome({name, age}) {
  return (
    <div>
      <h1>Hello, {name}</h1>
      <p>You're {age}</p>
    </div>
  )
}

const person = <Welcome name={studentIntroduction} age={student.age} />;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {person}
        {studentIntroduction}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
