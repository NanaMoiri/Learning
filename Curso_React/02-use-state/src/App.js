import logo from './logo.svg';
import './App.css';
import { Ejercicio } from './components/Ejercicio';
// import { MiPrimerEstado } from './components/MiPrimerEstado';


function App() {

  const anyoActual = new Date().getFullYear();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>El estado en React - Hook useState</h1>
        
        {/* <MiPrimerEstado /> */}
        {/*EJERCICIO */}

        <Ejercicio year={anyoActual}/>

      </header>
    </div>
  );
}

export default App;
