import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This React app was deployed to GitHub Pages
        </p>
        <a
          className="App-link"
          href="https://zjcz.github.io/deploy-react-app-to-github-pages.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn How
        </a>
      </header>
    </div>
  );
}

export default App;
