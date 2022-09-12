import  React from 'react';

export const Otrocomp = () => {

  const lenguajes = ["JavaScript", "Python", "PHP", "Java"];

  return (
  <div className='otrocomp'>
    <h1>Listado de Lenguajes</h1>
    {lenguajes.length >= 1 ?
      (<ul>
        {
          lenguajes.map((lenguaje, indice) => {
            return <li key={indice}>{lenguaje}</li>
          })
        }
      </ul>)
    : 
    (<p>No hay lenguajes</p>)
    }
  </div>
  )
}
