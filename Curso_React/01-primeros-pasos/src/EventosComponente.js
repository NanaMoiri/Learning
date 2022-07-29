import React from 'react'

export const EventosComponente = () => {

  const hasDadoClick = (e, nombre ) => {
    alert("Has dado click " + nombre)
  }

  function hasDadoDobleClick(e) {
    alert("Has dado doble click!")
  }

  const hasEntrado = (e, accion) => {
    alert(`Has ${accion} en la caja`);
  }

  const hasSalido = (e, accion) => {
    alert(`Has ${accion} de la caja`)
  }

  const estasDentro = (e) => {
    console.log("Estas dentro del input, mete tu nombre");
  }

  const estasFuera = (e) => {
    console.log("Estas fuera del input, mete tu nombre");
  }
  
  return (
    <div>
      <h1>Eventos en React</h1>
      <p>
        {/*Evento click*/}
        <button onClick={ e => hasDadoClick(e, "Gemma") }> Dame Click!</button>
      </p>
      <p>
        {/*Evento doble click*/}
        <button onDoubleClick={ hasDadoDobleClick} > Doble Click!</button>
      </p>
      <div id="caja"
          onMouseEnter ={ e => hasEntrado (e, "entrado") }
          onMouseLeave = { e => hasSalido (e, "salido") }
      >
        {/*Evento onMouseEnter onMouseLeave*/}
        Pasa por encima
      </div>

      <p>
        {/*Evento onFocus y blur */}
        <input type="text" onFocus={ estasDentro } onBlur={ estasFuera } placeholder="Introduce tu nombre"/>
      </p>
    </div>
  )
}
