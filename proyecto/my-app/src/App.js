import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        {/*COMPONENTE PROPIO GREETING.JSX*/}
        {/* <Greeting name={"PEPE"}></Greeting> */}

        {/* COMPONENTE FUNCIONAL GREETINGF.JSX */}
        <GreetingF name={"Juan"}></GreetingF>
        
      </header>
    </div>
  );
}

export default App;
