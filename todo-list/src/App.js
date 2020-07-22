import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const todosArray = [
                  'Go to market',
                  'Buy food',
                  'Make dinner'
                ];
  const todos = todosArray.map(item => <li>{item}</li>)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>{todos}</ul>
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
