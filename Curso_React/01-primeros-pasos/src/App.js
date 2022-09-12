import logo from './logo.svg';
import './App.css';
import MiComponenete from './MiComponente';
import { Otrocomp } from './Otrocomp';
import { SegundoComponente } from './SegundoComponente';
import { TercerComponente } from './TercerComponente';
import { EventosComponente } from './EventosComponente';

function App() {

  let informacion = {
    altura : '169',
    peso : '66'
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Otrocomp />
        {/* Ejemplo de como hacer un comentario en JSX*/}
        <EventosComponente />
        <TercerComponente nombre = "Gemma" apellido = "Gomez"  ficha = {informacion}/>
        <SegundoComponente />
        <MiComponenete />
      </header>
    </div>
  );
}

export default App;
