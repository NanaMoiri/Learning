import React, {useState} from 'react';

export const MiPrimerEstado = () => {

  // let nombre = "Gemma Gomez";

  // const cambiarNombre = e => {
  //   nombre = "Juana Perez"
  // };

  const [ nombre, setNombre] = useState("Gemma Gomez");
  const cambiarNombre = (e, nombreFijo) => {
    setNombre(nombreFijo);
  }
  
  return (
    <div>

      <h3>Componente: MiPrimerEstado</h3>
      <strong>
        {nombre}
      </strong>
      &nbsp;
      <button onClick={ e => cambiarNombre(e, "Francisco") }>Cambiar nombre por francisco</button>
      &nbsp;
      <input type="text" onChange={ e => cambiarNombre(e, e.target.value )} placeholder="Cambia el nombre"/>


    </div>

  )
}
