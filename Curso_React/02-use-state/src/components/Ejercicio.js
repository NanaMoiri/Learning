import React, {useState} from 'react';
import PropTypes from "prop-types";

export const Ejercicio = ({year}) => {

  const [actualYear, setYear] = useState(year);

  const subsYear = e => {
    setYear(actualYear-1)
  }

  const addYear = e => {
    setYear(actualYear+1)
  }

  const inputYear = e => {
    setYear(e.target.value)
  }
  return (
    <div>

      <h1>{actualYear}</h1>

      <button onClick={subsYear} >Año anterior</button>
      <button onClick={addYear}>Siguiente año</button>
      <br/>
      <input onChange={inputYear} type="text" placeholder='Introduce el año'/>

    </div>
  )
}

Ejercicio.propTypes = {
 year : PropTypes.number.isRequired
}