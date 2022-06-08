import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import AllCycles from './hooks/lifecycle/allcycles';
import GreetingStyled from './components/pure/greetingStyled';

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
        {/* <TaskListComponent ></TaskListComponent> */}

        {/* Ejemplo de hooks useState */}
        {/* <Ejemplo1></Ejemplo1> */}

        {/* Ejemplo de useRef y useEffect */}
        {/* <Ejemplo2></Ejemplo2> */}

        {/* Ejemplo con useState y useContext */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        
        {/* <Ejemplo4 nombre="Martín">
          Todo lo que esta aqui contenido es tratado como props.children
          <h3>
            Contenido del props.children
          </h3>
        </Ejemplo4> */}

        {/* Ejemplo de life cycle */}
        {/* <AllCycles></AllCycles> */}

        {/* Ejemplo de estilos en componente */}
        <GreetingStyled name="Martín"></GreetingStyled>

      </header>
    </div>
  );
}

export default App;
