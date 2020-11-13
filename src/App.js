import logo from './logo.svg';
import './App.css';
import * as nums from './number';

const word = 'Hello world!';
const count = 7;
const flag = true;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p style={{color:'blue', margin:0}}>
          {word}
        </p>
        <p style={{margin:0}}>
          Count = {count}
        </p>
        <p style={{margin:0}}>
           1 + 4 = {1 + 4}
        </p>
        <p style={{margin:0}}>
           {flag && 'Flag is true'}
        </p>
        <p style={{margin:0}}>
           {(count>=(1+4)) ? 'Count >= 1+4' : 'Count < 1+4'}
           {undefined}
           {null}
           {false}
           {true}
        </p>
        <p style={{margin:0}}>
          nums.count =  {nums.count}, nums.length = {nums.length}
        </p>
        <p style={{margin:0}}>
          count * length =  {nums.count * nums.length}
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
