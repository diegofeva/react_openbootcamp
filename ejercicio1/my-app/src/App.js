import logo from './logo.svg';
import './App.css';
import ComponentA from './components/ComponentA';
import ComponentC from './components/componentC';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ComponentA></ComponentA>
        <ComponentC></ComponentC>
      </header>
    </div>
  );
}

export default App;
