import React from 'react'

export const SegundoComponente = () => {

  const peliculas = ['Star Wars', 'La sirenita', 'Harry Potter'];

  return (
    
    <div className='segundo-componente'>
        <h1>Peliculas Favoritas</h1>

        {peliculas.length >= 1 ?
          (<ul>
            {
              peliculas.map((pelicula, indice) => {
                return <li key={indice}>{pelicula}</li>;
              })
            }
          </ul>)
          : (<p>No hay ninguna película en favoritos</p>)
        }
    </div>
  )
}
