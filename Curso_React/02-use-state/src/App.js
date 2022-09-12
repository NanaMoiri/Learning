import logo from './logo.svg';
import './App.css';
// import { MiPrimerEstado } from './components/MiPrimerEstado';
import { SelectorDeAnyo } from './components/SelectorDeAño';

function App() {

  const anyoActual = new Date().getFullYear();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>El estado en React - Hook useState</h1>
        
        {/* <MiPrimerEstado /> */}
        {/*EJERCICIO */}
        <SelectorDeAnyo year={anyoActual}/>
      </header>
    </div>
  );
}

export default App;
