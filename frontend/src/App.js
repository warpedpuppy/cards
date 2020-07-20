import React from 'react';
import './App.css';
import CardService from './services/card-services';
import Deck from './components/Deck';

async function testBackend(e) {
  e.preventDefault();
  let test = await CardService.testBackend();
}

function App() {
  return (
    <div className="App">
      <header>
        <h1>cards</h1>
      </header>
      <main>
        <button onClick={testBackend}>test backend</button>
        <Deck />
      </main>
    </div>
  );
}

export default App;
