import React from 'react';
import logo from './logo.svg';
import './App.css';
import { apiGet } from './api/index';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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

      {
        apiGet('https://www.googleapis.com/books/v1/volumes?q=TypeScript')
      }
    </div>
  );
}

export default App;
