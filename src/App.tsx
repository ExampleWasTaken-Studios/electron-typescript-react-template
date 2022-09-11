import "./App.css";
import logo from "./rendererAssets/img/logo.png";

export const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          style={{ borderRadius: 1000 }}
        />
        <p>
          Electron-TypeScript-React template by <br />
          <a 
            className="App-link"
            href="https://github.com/ExampleWasTaken-Studios"
            target="_blank"
            rel="noopener noreferrer"
          >
            ExampleWasTaken Studios
          </a>
        </p>
        <p>
          Please read the README of this project <br/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          Learn React
          </a>
        </p>
      </header>
    </div>
  );
};