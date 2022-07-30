import React, {useState} from 'react';
import PropTypes from 'prop-types';

export const SelectorDeAño = ( {anyo} ) => {

  const [anyo, setAnyo] = useState(anyo);

  const sumarAnyo = (e) => {
    let masUno = anyo + 1;
    setAnyo(masUno)
  }

  const restarAnyo = (e) => {
    let menosUno = anyo - 1;
    setAnyo(menosUno)
  }


  return (
    <div>
      &nbsp;
      <button onClick={ e => restarAnyo(e)}>Año anterior</button>
      &nbsp;
      <button onClick={ e => sumarAnyo(e) }>Año siguiente</button>  
    </div>
  )
}

SelectorDeAño.propTypes = {
  anyo : PropTypes.number.isRequired
}
