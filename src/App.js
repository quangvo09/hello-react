import React from 'react';
import './App.css';
import { SaveToStorage } from './save-to-storage';

function App({ onClick }) {
  const getValue = () => {
    return SaveToStorage().getValue();
  }

  return (
    <div className="App">
      <header className="App-header">
        <button id="my-button-one" onClick={onClick}>Button1</button>
        <button id="my-button-two" onClick={getValue}>Button2</button>
      </header>
    </div>
  );
}

export default App;
