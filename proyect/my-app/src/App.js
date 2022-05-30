import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        {/*COMPONENTE PROPIO GREETING.JSX*/}
        {/* <Greeting name={"PEPE"}></Greeting> */}

        {/* COMPONENTE FUNCIONAL GREETINGF.JSX */}
        {/* <GreetingF name={"Juan"}></GreetingF> */}

        {/*COMPONENTE DE LISTADO DE TAREAS*/}
        <TaskListComponent ></TaskListComponent>
        
      </header>
    </div>
  );
}

export default App;
