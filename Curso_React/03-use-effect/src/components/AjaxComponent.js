import React, { useEffect, useState } from 'react'

export const AjaxComponent = () => {

  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [errores, setErrores] = useState("");

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
    ]);
  }

  const getUsuariosAjaxPms = () => {
    fetch("https://reqres.in/api/users?page=1")
      .then(response => response.json())
      .then(result => {
        setUsuarios(result.data)
        console.log(usuarios)
      }, error => {
        console.log(error);
      })
  };

  const getUsuariosAjaxAW = () => {

    setTimeout(async()=> {
      try{
        const peticion = await fetch("https://reqres.in/api/users?page=1");
        const {data} = await peticion.json();
    
        setUsuarios(data);
        setCargando(false);
      } catch(error) {
        console.log(error.message);
        setErrores(error.message);
      }
    }, 2000)

  }


  useEffect(() => {
    // getUsuariosEstaticos();
    // getUsuariosAjaxPms();

    getUsuariosAjaxAW();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  if(errores !== ""){
    return (
      <div className='errores'>{errores}</div>
    );
  }else if(cargando === true) {
      //Cuando esta todo cargando
  return (
    <div className='cargando'>Cargando datos...</div>
  );
  } else if(cargando === false && errores === ""){
  //Cuando todo ha cargado correctamente se activa este return
  return (
    <div>

      <h2>Listado de usuarios via Ajax</h2>
      <ol className='usuarios'>
        {
          usuarios.map(usuario => {
            return <li key={usuario.id}>
              <img src={usuario.avatar} alt="" width="20px" />
              &nbsp;
              {usuario.first_name} 
              {usuario.last_name}</li>
          })
        }
      </ol>

    </div>
  )
  }
}
