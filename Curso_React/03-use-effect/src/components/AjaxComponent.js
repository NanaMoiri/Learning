import React, { useEffect, useState } from 'react'

export const AjaxComponent = () => {

  const [usuarios, setUsuarios] = useState([]);

  //Generico / básico

  const getUsuariosEstaticos = () => {
    setUsuarios([
      {
        "id": 7,
        "email": "michael.lawson@reqres.in",
        "first_name": "Michael",
        "last_name": "Lawson",
        "avatar": "https://reqres.in/img/faces/7-image.jpg"
        },
        {
        "id": 8,
        "email": "lindsay.ferguson@reqres.in",
        "first_name": "Lindsay",
        "last_name": "Ferguson",
        "avatar": "https://reqres.in/img/faces/8-image.jpg"
        },
        {
        "id": 9,
        "email": "tobias.funke@reqres.in",
        "first_name": "Tobias",
        "last_name": "Funke",
        "avatar": "https://reqres.in/img/faces/9-image.jpg"
        }
    ])
  }

  const getUsuariosAjaxPms = () => {
    fetch("https://reqres.in/api/users?page=1")
      .then(response => response.json())
      .then(result => {
        setUsuarios(result.data);
        console.log(usuarios);
      }, error => {
        console.log(error);
      })
  }

  useEffect(() => {
    // getUsuariosEstaticos();
    getUsuariosAjaxPms();
  },[]);

  return (
    <div>

      <h2>Listado de usuarios via Ajax</h2>
      <ol className='usuarios'>
        {
          usuarios.map(usuario => {
            return <li key={usuario.id}>{usuario.first_name} {usuario.last_name}</li>
          })
        }
      </ol>

    </div>
  )
}
