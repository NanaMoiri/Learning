import React, { useEffect } from 'react'

export const AvisoComponent = () => {

  useEffect(() => {

    //se detecta cuando se monta el componente
    alert("El componente AvisoComponent esta montado")

    //cuando el componente se desmonta
    return() => {
      alert("Componente desmontado");
    }
  }, []); // se ejecuta una vez porque el array es vacío

  return (
    <div>
      <h3>Hola Nana! ¿Cómo estás?</h3>
      <button onClick={e => { alert ("Bienvenid@")}}>Mostrar Alerta</button>
    </div>
  )
}
