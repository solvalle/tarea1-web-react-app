import logo from './logo.svg';
import './App.css';

/*
export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}
*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          CI-0137 Desarrollo de Aplicaciones Web
        </p>
        <p>
          Tarea #1
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Sol Valle Vega
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          B98050
        </a>
      </header>
    </div>
  );
}

export default App;


