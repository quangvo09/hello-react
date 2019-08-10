import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SaveToStorage } from './save-to-storage';

function App({ onClick }) {
  const getValue = () => {
    return SaveToStorage().getValue();
  }
  return (
    <div className="App">
      <header className="App-header">
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
        <button id="my-button-one" onClick={onClick}></button>
        <button id="my-button-two" onClick={getValue}></button>
      </header>
    </div>
  );
}

export default App;
