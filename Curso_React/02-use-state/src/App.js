import logo from './logo.svg';
import './App.css';
// import { MiPrimerEstado } from './components/MiPrimerEstado';
import { SelectorDeAño } from './components/SelectorDeAño';

function App() {

  let anyoactual = new Date().getFullYear();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>El estado en React - Hook useState</h1>
        
        {/* <MiPrimerEstado /> */}
        {/*EJERCICIO */}
        <h1>{anyoactual}</h1>
        <SelectorDeAño anyo= {anyoactual}/>
      </header>
    </div>
  );
}

export default App;
