import React, { useEffect, useState } from 'react'
import { AvisoComponent } from './AvisoComponent';

export const PruebasComponent = () => {

    const [usuario, setUsuario] = useState("Nana Moiri");
    const [fecha, setFecha] = useState('01-01-1998');
    const [contador, setContador] = useState(0);

    const modUsuario = e => {
      setUsuario(e.target.value);
      console.log("ha habido un cambio")
    };

    const cambiarFecha = e => {
      setFecha(new Date().toLocaleDateString());
    }

    //para que el use effect solo se ejecute una vez hay que darle un segundo parámetro
    useEffect(() => {
      console.log("Has cargado el componente PruebasComponent!!");
    }, []);

    //Se ejecutará solo si cambia el usuario
    useEffect(() => {
      setContador(contador+1);
      console.log("Has modificado el usuario: " + contador + " veces.");
    }, [usuario]);

  return (
    <div>
      <h1>El efecto - Hook useEffect</h1>

      <strong className={contador >= 10 ? 'label label-green': 'label'}>{ usuario }</strong>
      <strong>{ fecha }</strong>

      <p>
        <input type="text" onChange={ modUsuario } placeholder="cambia el nombre"/>
        <button onClick={ cambiarFecha }>Cambiar Fecha</button>
      </p>

      { usuario == "Nana" && <AvisoComponent />}

    </div>
  )
}
