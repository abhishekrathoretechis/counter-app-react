import {useState} from 'react';
import logo from './logo.svg';
import './App.css';

const App =()=> {
  const [counter, setCounter] = useState(0)
  const addOne =() => {
    setCounter(counter + 1)
  }

  const subOne =() => {
    setCounter(counter -1)
  }
  return (
    <div className="App">
      <button onClick={addOne}>+</button>
      <h1>{counter}</h1>
      <button onClick={subOne}>-</button>

    </div>
  );
}

export default App;
