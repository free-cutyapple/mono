import logo from './logo.svg';
import './App.css';
import { log } from '@free-cutyapple/c';

function App() {
  log();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>ver. @free-cutyapple/c - log</p>
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
