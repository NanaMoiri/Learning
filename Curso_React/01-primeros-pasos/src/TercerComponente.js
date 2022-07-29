import React from 'react';
import PropTypes from "prop-types";

export const TercerComponente = ({nombre, apellido, ficha}) => {
  return (
    <div>
      <ul>
        <li>{nombre}</li>
        <li>{apellido}</li>
        <li>{ficha.peso}</li>
        <li>{ficha.altura}</li>
      </ul>
    </div>
  )
}

TercerComponente.propTypes = {
  nombre : PropTypes.string.isRequired,
  apellido: PropTypes.string.isRequired,
  ficha : PropTypes.object
}

TercerComponente.defaultProps = {
  nombre: "Sandra",
  apellido : "Perez"
}